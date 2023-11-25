using ServiceStack;
using ServiceStack.Data;

[assembly: HostingStartup(typeof(NorthwindCrud.ConfigureDbValidation))]

namespace NorthwindCrud;

public class ConfigureDbValidation : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context, services) => {
            // Add support for dynamically generated db rules
            services.AddSingleton<IValidationSource>(c =>
                new OrmLiteValidationSource(c.Resolve<IDbConnectionFactory>()));
        })
        .ConfigureAppHost(appHost => {
            // Create DB Validation Tables
            appHost.Resolve<IValidationSource>().InitSchema();
        });
}
