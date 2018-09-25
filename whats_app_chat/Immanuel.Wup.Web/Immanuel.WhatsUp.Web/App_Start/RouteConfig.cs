using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Immanuel.WhatsUp.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            //routes.MapRoute(
            //    name: "Default2",
            //    url: "Home/Page",
            //    defaults: new { controller = "Home", action = "Page" }
            //);

            //routes.MapRoute(
            //    name: "Default1",
            //    url: "Home/Page/{id}/{mob}",
            //    defaults: new { controller = "Home", action = "Page", id = UrlParameter.Optional, mob = UrlParameter.Optional }
            //);

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}/{mob}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional, mob = UrlParameter.Optional  }
            );

            //routes.MapMvcAttributeRoutes();
        }
    }
}
