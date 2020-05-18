using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using ServiceStack;

namespace NorthwindCrud
{
    [Priority(-1)]
    public class ConfigureGrpc : IConfigureServices, IConfigureApp, IConfigureAppHost
    {
        public void Configure(IServiceCollection services)
        {
            services.AddServiceStackGrpc();
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseRouting();
        }

        public void Configure(IAppHost appHost)
        {
            appHost.Plugins.Add(new GrpcFeature(appHost.GetApp()));
        }
    }
}