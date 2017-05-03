using System.Web;
using System.Web.Optimization;

namespace LMS
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/library/script").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/bootstrap.js",
                        "~/Scripts/angular.js",
                        "~/Scripts/angular-route.js",

                        "~/app/core/dashboard/dashboardModule.js",
                        
                        "~/app/core/framework/frameworkModule.js",
                        "~/app/core/framework/frameworkController.js",
                        "~/app/core/framework/frameworkDirective.js",

                        "~/app/core/menu/menuModule.js",
                        "~/app/core/menu/menuController.js",
                        "~/app/core/menu/menuDirective.js",
                        "~/app/core/menu/menuItemDirective.js",
                        "~/app/core/menu/menuGroupDirective.js",

                        "~/app/libraryApp.js",
                        "~/app/config.js",

                        "~/app/Book/bookController.js",
                        "~/app/Book/bookService.js"));

            bundles.Add(new StyleBundle("~/bundles/library/style").Include(
                      "~/Content/site.css",
                      "~/Content/bootstrap.css",
                      "~/Content/font-awesome.min.css",
                      "~/app/core/framework/framework.css",
                      "~/app/core/menu/menu.css",
                      "~/Content/font-awesome.min.css"
                      ));

            BundleTable.EnableOptimizations = false;
        }
    }
}
