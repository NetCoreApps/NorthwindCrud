using System;
using System.Collections.Generic;
using System.Linq;
using ServiceStack;
using NorthwindCrud.ServiceModel;
using ServiceStack.Auth;

namespace NorthwindCrud.ServiceInterface
{
    [Route("/sessions")]
    public class AllSessions : IReturn<AllSessionsResponse> {}

    public class AllSessionsResponse
    {
        public List<string> SessionKeys { get; set; }
        public Dictionary<string, IAuthSession> Sessions { get; set; }
        public ResponseStatus ResponseStatus { get; set; }
    }
    
    public class MyServices : Service
    {
        public object Any(Hello request) => new HelloResponse { Result = $"Hello, {request.Name}!" };

        public object Any(AllSessions request)
        {
            var sessionKeys = Request.GetCacheClient()
                .GetKeysStartingWith(IdUtils.CreateUrn<IAuthSession>("")).ToList();
            var allSessions = (Dictionary<string, IAuthSession>) Cache.GetAll<IAuthSession>(sessionKeys);
            
            return new AllSessionsResponse {
                SessionKeys = sessionKeys,
                Sessions = allSessions
            };
        }
    }
}
