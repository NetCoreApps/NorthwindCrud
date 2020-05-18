using System.Runtime.Serialization;
using ServiceStack;

namespace NorthwindCrud.ServiceModel
{
    [Route("/hello")]
    [Route("/hello/{Name}")]
    [DataContract]
    public class Hello : IReturn<HelloResponse>
    {
        [DataMember(Order = 1)]
        public string Name { get; set; }
    }

    [DataContract]
    public class HelloResponse
    {
        [DataMember(Order = 1)]
        public string Result { get; set; }
    }
}
