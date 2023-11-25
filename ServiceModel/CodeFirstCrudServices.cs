using System.Runtime.Serialization;
using ServiceStack;

// Examples of taking over & customizing code-first Services 

namespace NorthwindCrud.ServiceModel;

[Route("/categories", "POST"),DataContract]
[ValidateHasRole("Employee")]
public class CreateCategory
    : IReturn<IdResponse>, IPost, ICreateDb<Category>
{
    [DataMember(Order = 1)]
    public long Id { get; set; }

    [ValidateNotEmpty]
    [DataMember(Order = 2)]
    public string CategoryName { get; set; }

    [ValidateNotEmpty]
    [DataMember(Order = 3)]
    public string Description { get; set; }
}

[Route("/categories/{Id}", "PUT"), DataContract]
[ValidateHasRole("Employee")]
public class UpdateCategory
    : IReturn<IdResponse>, IPut, IUpdateDb<Category>
{
    [DataMember(Order = 1)]
    public long Id { get; set; }

    [ValidateNotEmpty]
    [DataMember(Order = 2)]
    public string CategoryName { get; set; }

    [ValidateNotEmpty]
    [DataMember(Order = 3)]
    public string Description { get; set; }
}

[DataContract]
public class Category
{
    [DataMember(Order = 1)]
    public long Id { get; set; }

    [DataMember(Order = 2)]
    public string CategoryName { get; set; }

    [DataMember(Order = 3)]
    public string Description { get; set; }
}
