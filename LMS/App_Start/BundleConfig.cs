using System.Web;
using System.Web.Optimization;

namespace TestMVC
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            // Application Specific Bundle

            bundles.Add(new ScriptBundle("~/bundles/library/script").Include(
                        "~/Scripts/bootstrap.js",
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/angular.js",
                        "~/Scripts/angular-route.js",
                        "~/app/LibraryApp.js",
                        "~/app/HomeController.js",
                        "~/app/Book/addBookController.js",
                        "~/app/Book/bookService.js"));

            bundles.Add(new StyleBundle("~/bundles/library/style").Include(
                      "~/Content/site.css",
                      "~/Content/bootstrap.css"));

            BundleTable.EnableOptimizations = false;
        }
    }
}
