using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace LMS
{
    public class WebApiConfig
    {
        public static void Register(HttpConfiguration configuration)
        {
            // Need to define our custom mapping as we are not using standard Web API HTTP Verb based routing in all scenarios
            // We use HTTP Verb based routing only in case of Delete

            configuration.Routes.MapHttpRoute("API Default", "api/{controller}/{action}/{id}", new { id = RouteParameter.Optional });
        }
    }
}