using Microsoft.Extensions.DependencyInjection;
using ServiceStack;
using ServiceStack.Data;
using ServiceStack.Validation;

namespace NorthwindCrud
{
    public class ConfigureValidation : IConfigureServices, IConfigureAppHost
    {
        public void Configure(IServiceCollection services)
        {
            // Add support for dynamically generated db rules
            services.AddSingleton<IValidationSource>(c => 
                new OrmLiteValidationSource(c.Resolve<IDbConnectionFactory>()));
        }

        public void Configure(IAppHost appHost)
        {
            appHost.Plugins.Add(new ValidationFeature());
            appHost.Resolve<IValidationSource>().InitSchema();
        }
    }
}