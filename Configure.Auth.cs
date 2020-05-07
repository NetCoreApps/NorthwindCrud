using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using ServiceStack;
using ServiceStack.Auth;
using ServiceStack.Data;

namespace NorthwindCrud
{
    public class ConfigureAuth : IConfigureServices, IConfigureAppHost, IPostInitPlugin
    {
        public void Configure(IServiceCollection services)
        {
            // Persist Authenticated Users in Database 
            services.AddSingleton<IAuthRepository>(c => 
                new OrmLiteAuthRepository(c.Resolve<IDbConnectionFactory>()));
        }

        public void Configure(IAppHost appHost)
        {
            var appSettings = appHost.AppSettings;
            // Setup Authentication
            appHost.Plugins.Add(new AuthFeature(() => new AuthUserSession(), 
                new IAuthProvider[] {
                    new CredentialsAuthProvider(appSettings),    // Username/Password credentials
                    new FacebookAuthProvider(appSettings),       /* Create App https://developers.facebook.com/apps */
                }) {
                IncludeOAuthTokensInAuthenticateResponse = true, // Include OAuth Keys in authenticated /auth page
            });

            appHost.Plugins.Add(new RegistrationFeature()); //Enable /register Service
            
            // Allow posting messages back to Studio when loaded in an iframe
            appHost.Plugins.Add(new CorsFeature(allowOriginWhitelist:new[]{ "https://localhost:5002" }));
        }

        public void AfterPluginsLoaded(IAppHost appHost)
        {
            var authRepo = appHost.Resolve<IAuthRepository>();
            authRepo.InitSchema();

            // Register Users that don't exist
            void EnsureUser(string email, string name, string[] roles=null)
            {
                if (authRepo.GetUserAuthByUserName(email) != null) 
                    return;
                
                authRepo.CreateUserAuth(new UserAuth {
                    Email = email,
                    DisplayName = name,
                    Roles = roles?.ToList(),
                }, password:"p@ss");
            }

            EnsureUser("employee@gmail.com", name:"A Employee",   roles:new[]{ "Employee" });
            EnsureUser("accounts@gmail.com", name:"Account Dept", roles:new[]{ "Employee", "Accounts" });
            EnsureUser("manager@gmail.com",  name:"The Manager",  roles:new[]{ "Employee", "Manager" });
        }
    }
}