# Northwind Crud

Northwind AutoQuery CRUD & ServiceStack Studio Demo.

Download and Run with [x dotnet tool](https://docs.servicestack.net/dotnet-tool):

    $ x download NetCoreApps/NorthwindCrud
    $ cd NorthwindCrud
    $ dotnet run

### Instantly Servicify Northwind DB with gRPC

To show the exciting potential of this feature we'll demonstrate one valuable use-case of creating a [grpc](/grpc) project, mixing in AutoQuery configuration to instantly Servicifying the Northwind DB, browsing the generated Services from ServiceStack's [Metadata Page](/metadata-page), explore the gRPC RPC Services `.proto` then create a new Dart App to consume the gRPC Services:

> YouTube: [youtu.be/5NNCaWMviXU](https://youtu.be/5NNCaWMviXU)

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/autogen-grpc.png)](https://youtu.be/5NNCaWMviXU)

#### Step-by-step Guide

See the annotated guide below to follow along:

Create a new [grpc](https://github.com/NetCoreTemplates/grpc) .NET Core project and open it in VS Code:

    $ x new grpc NorthwindApi
    $ code NorthwindApi

Inside VS Code open a Terminal Window and [mix in](/mix-tool) the required configuration:

    $ cd NorthwindApi
    $ x mix autocrudgen sqlite northwind.sqlite

Which will mix in the [autocrudgen](https://gist.github.com/gistlyn/464a80c15cb3af4f41db7810082dc00c) gist to enable AutoQuery and tell it to Auto Generate AutoQuery and CRUD Services for all tables in the registered RDBMS:

```csharp
public class ConfigureAutoQuery : IConfigureAppHost
{
    public void Configure(IAppHost appHost)
    {
        appHost.Plugins.Add(new AutoQueryFeature {
            MaxLimit = 1000,
            GenerateCrudServices = new GenerateCrudServices {
                AutoRegister = true
            }
        });
    }
}
```

The [sqlite](https://gist.github.com/gistlyn/768d7b330b8c977f43310b954ceea668) gist registers an 
[OrmLite.Sqlite](https://github.com/ServiceStack/ServiceStack.OrmLite) RDBMS connection with our App which we want to configure to connect to a **northwind.sqlite** database:

```csharp
public void Configure(IServiceCollection services)
{
    services.AddSingleton<IDbConnectionFactory>(new OrmLiteConnectionFactory(
        Configuration.GetConnectionString("DefaultConnection") 
            ?? "northwind.sqlite",
        SqliteDialect.Provider));
}
```

Then we apply the [northwind.sqlite](https://gist.github.com/gistlyn/97d0bcd3ebd582e06c85f8400683e037) gist to add the **northwind.sqlite** database to our new project.

Now that our App's configured we can run it with:

    $ dotnet run

Where it will start the ServiceStack gRPC App on 3 ports configured in **appsettings.json**:

 - `5001` - Enables access from existing HTTP/1.1 clients and proxies
 - `5002` - Enables a secure gRPC Channel
 - `5003` - Enables an insecure gRPC Channel

```json
{
  "Kestrel": {
    "Endpoints": {
      "Https": {
        "Url": "https://*:5001",
        "Protocols": "Http1"
      },
      "GrpcSecure": {
        "Url": "https://*:5051",
        "Protocols": "Http2"
      },
      "GrpcInsecure" : {
        "Url": "http://*:5054",
        "Protocols": "Http2"
      }
    }
  }
}
```

Once running you can view your Apps metadata page at `https://localhost:5001` to inspect all the Services that were generated.

#### Create Dart gRPC Console App

It's also now accessible via [ServiceStack's gRPC endpoint](/grpc) which opens your generated Services up to [Google's high-performance gRPC ecosystem](https://grpc.io) which enables typed, high-performance integrations into exciting platforms like [Flutter](https://flutter.dev) which uses the [Dart](https://dart.dev) programming language to create Reactive, high-performance native Android and iOS Apps. 

We can test Dart's gRPC integration and development workflow in a new Dart Console App we can create with:

    $ md dart-grpc
    $ cd dart-grpc
    $ pub global activate stagehand
    $ stagehand console-full

We'll need to update **pubspec.yaml** with the required gRPC dependencies:

```yaml
dependencies:
  fixnum: ^0.10.11
  async: ^2.2.0
  protobuf: ^1.0.1
  grpc: ^2.1.3    
```

When you save **pubspec.yaml** Dart's VS Code extension will automatically fetch any new dependencies which can also be manually run with:

    $ pub get

We can then use the [protoc support in the dotnet tools](/grpc#public-grpc-protoc-service-and-ui) to download our `.proto` Services descriptor and generate Dart's gRPC classes with a single command:

    $ x proto-dart https://localhost:5001 -out lib

We're now all set to consume our gRPC Services using the protoc generated gRPC proxy in our `main()` function in **main.dart**:

```dart
import 'dart:io';
import 'package:grpc/grpc.dart';
import 'package:dart_grpc/services.pb.dart';
import 'package:dart_grpc/services.pbgrpc.dart';

void main(List<String> arguments) async {
    var client = GrpcServicesClient(ClientChannel('localhost', port:5054,
      options:ChannelOptions(credentials: ChannelCredentials.insecure())));

    var response = await client.getQueryCategory(QueryCategory());
    print(response.results);
    exit(0);
}
```

Which can be run with:

    $ dart bin\main.dart

### Calling gRPC SSL Services

The [Dart gRPC Docs](/grpc-dart#dart-protoc-grpc-ssl-example) shows how we can connect to it via our gRPC SSL endpoint by running the openssl scripts in [grpc/scripts](https://github.com/NetCoreTemplates/grpc/tree/master/scripts) to generate our **dev.crt** and **prod.crt** SSL Certificates that you can configure in your in your **GrpcSecure** endpoint with:

```json
{
  "Kestrel": {
    "Endpoints": {
      "GrpcSecure": {
        "Url": "https://*:5051",
        "Protocols": "Http2",
        "Certificate": {
          "Path": "dev.pfx",
          "Password": "grpc"
        }
      }
    }
  }
}
```

Where you'll then be able to access the secure gRPC SSL endpoints using the generated **dev.crt** certificate in your Dart App:

```dart
import 'dart:io';
import 'package:grpc/grpc.dart';
import 'package:dart_grpc/services.pb.dart';
import 'package:dart_grpc/services.pbgrpc.dart';

GrpcServicesClient createClient({CallOptions options}) {
  return GrpcServicesClient(ClientChannel('localhost', port:5051,
    options:ChannelOptions(credentials: ChannelCredentials.secure(
        certificates: File('dev.crt').readAsBytesSync(),
        authority: 'localhost'))), options:options);
}

void main(List<String> args) async {

    var client = createClient();
    var response = await client.getQueryCategory(QueryCategory());
    print(response.results);

    exit(0);
}
```

### AutoGen's AutoRegister Implementation

Whilst the `AutoRegister = true` flag on its face may seem magical, it's simply an instruction that tells ServiceStack to register the **new** AutoQuery Services it already knows about and register them as if they were normal code-first Services that we had written ourselves.

More accurately, behind-the-scenes it uses the Metadata Type structure it constructed in generating the Services & Types, i.e. the same Types used to project into its Add ServiceStack Reference's generated C#, TypeScript, (and other languages) which are also the same Types that are manipulated when customizing code-generation, gets used to generate .NET Types in memory on Startup with Reflection.Emit. 

Barring any issues with the projection into IL, externally the end result is indistinguishable to a normal code-first ServiceStack Service manually created by a developer - An important point as to why these solutions compose well with the rest of ServiceStack, just as an AutoQuery Service is a normal ServiceStack Service, these auto generated & auto registered ServiceStack Services are regular Auto Query Services. 

The primary difference is that they only exist in a .NET Assembly in memory created on Startup, not in code so they're not "statically visible" to a C# compiler, IDE, tools, etc. But otherwise they're regular typed ServiceStack Services and can take advantage of the ecosystem around Services including [Add ServiceStack Reference](/add-servicestack-reference) & other Metadata Pages and Services, etc.

### CreateCrudServices Instructions

Peeking deeper behind the `AutoRegister` flag will reveal that it's a helper for adding an empty `CreateCrudServices` instance, i.e. it's equivalent to:

```csharp
Plugins.Add(new AutoQueryFeature {
    GenerateCrudServices = new GenerateCrudServices {
        CreateServices = {
            new CreateCrudServices()
        }
        //....
    }
});
```

#### Multiple Schemas and RDBMS Connections

This instructs ServiceStack to generate Services for the default option, i.e. all tables in the Database of the default registered Database connection.

Although should you wish to, you can also generate Services for multiple Databases and RDBMS Schemas within the same App.

With this you could have a single API Gateway Servicifying access to multiple System RDBMS Tables & Schemas, e.g:

```csharp
Plugins.Add(new AutoQueryFeature {
    GenerateCrudServices = new GenerateCrudServices {
        CreateServices = {
            new CreateCrudServices(),
            new CreateCrudServices { Schema = "AltSchema" },
            new CreateCrudServices { NamedConnection = "Reporting" },
            new CreateCrudServices { NamedConnection = "Reporting", Schema = "AltSchema" },
        }
        //....
    }
});
```

These will generated Service Contracts & DTO Types with the Multitenancy [NamedConnection](/autoquery-rdbms#named-connection) & OrmLite `[Schema]` attribute required for routing AutoQuery Services to use the appropriate RDBMS connection of Schema. 
 
Although there are potential conflicts if there are identical table names in each RDBMS/Schema as it has to go back and rewrite the Metadata References to use a non-ambiguous name, first tries using the NamedConnection, then the schema then a combination when both exists, if it's still ambiguous it gives up and ignores it. If you do run into conflicts, the recommendation is to "eject" the generated `.cs` sources and manually update them to use your preferred unique names.

### Customize Code Generation to include App Conventions

Being able to instantly generate AutoQuery Services for all your RDBMS tables is nice, but it's even nicer if you could easily customize the code-generation!

Together with the flexibility of the new declarative validation support you can compose a surprisingly large amount of your App's logic using the versatility of C# to automate embedding your App's conventions by annotating them on declarative Request DTOs.

The existing code-generation already infers a lot from your RDBMS schema which you can further augment using the available `GenerateCrudServices` filters:

 - `ServiceFilter` - called with every Service Operation
 - `TypeFilter` - called with every DTO Type
 - `IncludeService` - a predicate to return whether the **Service** should be included
 - `IncludeType` - a predicate to return whether the **Type** should be included

For an illustration of this in action, here's a typical scenario of how the Northwind AutoQuery Services could be customized:

 - Controlling which Tables **not to generate Services for** in `ignoreTables`
 - Which tables not to generate **Write Crud Services** for in `readOnlyTables`
 - Which tables to **restrict access** to in different roles in `protectTableByRole` 
 - Example of **additional validation** to existing tables in `tableRequiredFields`
   - Adds the `[ValidateNotEmpty]` attribute to Services accessing the table and the `[Required]` OrmLite attribute for the Data Model DTO Type.

```csharp
var ignoreTables = new[] { "IgnoredTable", }; // don't generate AutoCrud APIs for these tables
var readOnlyTables = new[] { "Region" };
var protectTableByRole = new Dictionary<string,string[]> {
    ["Admin"]    = new[] { nameof(CrudEvent), nameof(ValidationRule) },
    ["Accounts"] = new[] { "Order", "Supplier", "Shipper" },
    ["Employee"] = new[] { "Customer", "Order", "OrderDetail" },
    ["Manager"]  = new[] { "Product", "Category", "Employee", "UserAuth", "UserAuthDetails" },
};
var tableRequiredFields = new Dictionary<string,string[]> {
    ["Shipper"] = new[]{ "CompanyName", "Phone" },
};

Plugins.Add(new AutoQueryFeature {
    MaxLimit = 100,
    GenerateCrudServices = new GenerateCrudServices
    {
        ServiceFilter = (op,req) => 
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
            if (op.DataModel != null && tableRequiredFields.TryGetValue(op.DataModel.Name, out var required))
            {
                var props = op.Request.Properties.Where(x => required.Contains(x.Name));
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
```

To assist in code-generation a number of high-level APIs are available to help with identifying Services, e.g:

 - `operation.IsCrud()` - Is read-only AutoQuery or AutoCrud write Service
 - `operation.IsCrudWrite()` - Is AutoCrud write Service
 - `operation.IsCrudRead()` - Is AutoQuery read-only Service
 - `operation.ReferencesAny()` - The DTO Type is referenced anywhere in the Service (e.g. Request/Response DTOs, Inheritance, Generic Args, etc)
 - `type.InheritsAny()` - The DTO inherits any of the specified type names
 - `type.ImplementsAny()` - The DTO implements any of the specified interface type names

### Mixing generated AutoQuery Services & existing code-first Services

The expected use-case for these new features is that you'd create a new project that points to an existing database to bootstrap your project with code-first AutoQuery Services using the dotnet tool to download the generated types, i.e:

    $ x csharp https://localhost:5001 -path /crud/all/csharp

At which point you'd "eject" from the generated AutoQuery Services (forgetting about this feature), copy the generated types into your **ServiceModel** project and continue on development as code-first Services just as if you'd created the Services manually.

But the `GenerateCrudServices` feature also supports a "hybrid" mode where you can also just generate Services for any **new** AutoQuery Services that don't exist, i.e. for tables for which there are no existing services which you can access their generated Services from:

    $ x csharp https://localhost:5001 -path /crud/new/csharp

The existing `/crud/all/csharp` Service continues to return generated Services for all Tables but will stitch together and use existing types where they exist.

### Trying it out

We now have all the features we need to quickly servicify an existing database that we can easily customize to apply custom App logic to further protect & validate access.

So you can quickly explore these new features locally, you can download the enhanced Northwind example with this customization above in the new [github.com/NetCoreApps/NorthwindCrud](https://github.com/NetCoreApps/NorthwindCrud) project which you can download & run with:

    $ x download NetCoreApps/NorthwindCrud
    $ cd NorthwindCrud
    $ dotnet run

This example App is also configured with other new features in incoming release including Crud Events in 
[Startup.cs](https://github.com/NetCoreApps/NorthwindCrud/blob/master/Startup.cs):

```csharp
// Add support for auto capturing executable audit history for AutoCrud Services
container.AddSingleton<ICrudEvents>(c => new OrmLiteCrudEvents(c.Resolve<IDbConnectionFactory>()));
container.Resolve<ICrudEvents>().InitSchema();
```

As well as support for dynamically generated db rules in 
[Configure.Validation.cs](https://github.com/NetCoreApps/NorthwindCrud/blob/master/Configure.Validation.cs):

```csharp
services.AddSingleton<IValidationSource>(c => 
    new OrmLiteValidationSource(c.Resolve<IDbConnectionFactory>()));

appHost.Resolve<IValidationSource>().InitSchema();
```

To be able to test the custom code generation the example is pre-populated with 3 users with different roles in 
[Configure.Auth.cs](https://github.com/NetCoreApps/NorthwindCrud/blob/master/Configure.Auth.cs):

```csharp
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
```

Of which you can also find published on NorthwindCrud's home page:

### Open in ServiceStack Studio

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/northwindcrud-home.png)

### Retrying Dart gRPC Example

We can see an immediate effect of these customizations in **NorthwindCrud** where most APIs now require Authentication:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/northwindcrud-metadata.png)

If we then try to run our Dart `main.dart` example against the customized **NorthwindCrud** APIs by first regenerating gRPC protoc Types:

    $ x proto-dart https://localhost:5001 -out lib

Then try rerunning `main.dart` where it will now fail with an **Unauthorized** exception:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/northwindcrud-noauth.png)

To now be able to access most Services we'll need to [Authenticate as registered user](/grpc-dart#dart-grpc-authenticated-request-example).

As NorthwindCrud is [configured to use JWT](https://github.com/NetCoreApps/NorthwindCrud/blob/master/Configure.Auth.cs) we can create an Authenticated gRPC client by adding the populated JWT Token from an Authenticated Request into the **Authorization** gRPC metadata Header:

```dart
GrpcServicesClient createClient({CallOptions options}) {
  return GrpcServicesClient(ClientChannel('localhost', port:5054,
    options:ChannelOptions(credentials: ChannelCredentials.insecure())), 
    options:options);
}

void main(List<String> arguments) async {
    var authResponse = await createClient().postAuthenticate(
        Authenticate()..provider='credentials'..userName='manager@gmail.com'..password='p@ss');

    var authClient = createClient(options:CallOptions(metadata:{ 
            'Authorization': 'Bearer ${authResponse.bearerToken}' 
        }));

    var response = await authClient.getQueryCategory(QueryCategory());
    print(response.results);
    exit(0);
}
```

Now when we rerun `main.dart` we'll be able to access our Northwind categories again:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/northwindcrud-jwtauth.png)
