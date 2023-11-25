using Funq;
using ServiceStack;
using NorthwindCrud.ServiceInterface;
using ServiceStack.Data;
using ServiceStack.DataAnnotations;
using ServiceStack.OrmLite;

[assembly: HostingStartup(typeof(NorthwindCrud.AppHost))]

namespace NorthwindCrud;

public class AppHost : AppHostBase, IHostingStartup
{
    public AppHost() : base("Northwind Crud", typeof(MyServices).Assembly) { }

    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context, services) => {
            // Configure ASP.NET Core IOC Dependencies
        });

    // Configure your AppHost with the necessary configuration and dependencies your App needs
    public override void Configure(Container container)
    {
        SetConfig(new HostConfig
        {
            DebugMode = true,
            AdminAuthSecret = "zsecret", // Super User Auth Key
        });

        // Customize Service Generation for this database
        var ignoreTables = new[] { "IgnoredTable", }; // don't generate AutoCrud APIs for these tables
        var readOnlyTables = new[] { "Region" };
        var protectTableByRole = new Dictionary<string, string[]>
        {
            ["Admin"] = new[] { nameof(CrudEvent), nameof(ValidationRule) },
            ["Employee"] = new[] { "Customer", "Order", "OrderDetail" },
            ["Accounts"] = new[] { "Supplier", "Shipper" },
            ["Manager"] = new[] { "Product", "Category", "Employee", "EmployeeTerritory", "UserAuth", "UserAuthDetails", "UserAuthRole" },
        };
        var tableRequiredFields = new Dictionary<string, string[]>
        {
            ["Shipper"] = new[] { "CompanyName", "Phone" },
        };

        Plugins.Add(new AutoQueryFeature
        {
            MaxLimit = 1000,
            GenerateCrudServices = new GenerateCrudServices
            {
                // Comment below to disable auto-generation of missing AutoQuery Services
                AutoRegister = true,

                ServiceFilter = (op, req) =>
                {
                    // Require all Write Access to Tables to be limited to Authenticated Users
                    if (op.IsCrudWrite())
                    {
                        op.Request.AddAttributeIfNotExists(new ValidateRequestAttribute("IsAuthenticated"),
                            x => x.Validator == "IsAuthenticated");
                    }

                    // Limit Access to specific Tables
                    foreach (var tableRole in protectTableByRole)
                    {
                        foreach (var table in tableRole.Value)
                        {
                            if (op.ReferencesAny(table))
                                op.Request.AddAttribute(new ValidateHasRoleAttribute(tableRole.Key));
                        }
                    }

                    // Add [ValidateNotEmpty] attribute on Services operating Tables with Required Fields
                    if (op.DataModel != null && tableRequiredFields.TryGetValue(op.DataModel.Name, out var requiredFields))
                    {
                        var props = op.Request.Properties.Where(x => requiredFields.Contains(x.Name));
                        props.Each(x => x.AddAttribute(new ValidateNotEmptyAttribute()));
                    }
                },
                TypeFilter = (type, req) =>
                {
                    // Add OrmLite [Required] Attribute on Tables with Required Fields
                    if (tableRequiredFields.TryGetValue(type.Name, out var requiredFields))
                    {
                        var props = type.Properties.Where(x => requiredFields.Contains(x.Name));
                        props.Each(x => x.AddAttribute(new RequiredAttribute()));
                    }
                },
                //Don't generate the Services or Types for Ignored Tables
                IncludeService = op => !ignoreTables.Any(table => op.ReferencesAny(table)) &&
                    !(op.IsCrudWrite() && readOnlyTables.Any(table => op.ReferencesAny(table))),
                IncludeType = type => !ignoreTables.Contains(type.Name),
            }
        });

        // Add support for auto capturing executable audit history for AutoCrud Services
        container.AddSingleton<ICrudEvents>(c => new OrmLiteCrudEvents(c.Resolve<IDbConnectionFactory>()));
        container.Resolve<ICrudEvents>().InitSchema();
    }

}
