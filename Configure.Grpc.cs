using ServiceStack;

[assembly: HostingStartup(typeof(NorthwindCrud.ConfigureGrpc))]

namespace NorthwindCrud;

public class ConfigureGrpc : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context, services) => {
                services.AddServiceStackGrpc();
            })
        .ConfigureAppHost(appHost => {
            // Enable built-in Database Admin UI at /admin-ui/database
            // appHost.Plugins.Add(new AdminDatabaseFeature());
            appHost.Plugins.Add(new GrpcFeature(appHost.GetApp()));
        });
}
