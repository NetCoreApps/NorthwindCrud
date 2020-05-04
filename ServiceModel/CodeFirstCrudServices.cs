using System.Runtime.Serialization;
using ServiceStack;

// Examples of taking over & customizing code-first Services 

namespace NorthwindCrud.ServiceModel
{
    [Route("/categories", "POST")]
    [ValidateHasRole("Employee")]
    public class CreateCategory
        : IReturn<IdResponse>, IPost, ICreateDb<Category>
    {
        public long Id { get; set; }

        [ValidateNotEmpty]
        public string CategoryName { get; set; }

        [ValidateNotEmpty]
        public string Description { get; set; }
    }

    [Route("/categories/{Id}", "PUT")]
    [ValidateHasRole("Employee")]
    public class UpdateCategory
        : IReturn<IdResponse>, IPut, IUpdateDb<Category>
    {
        public long Id { get; set; }

        [ValidateNotEmpty]
        public string CategoryName { get; set; }

        [ValidateNotEmpty]
        public string Description { get; set; }
    }
    
    public class Category
    {
        public long Id { get; set; }

        public string CategoryName { get; set; }

        public string Description { get; set; }
    }    
}