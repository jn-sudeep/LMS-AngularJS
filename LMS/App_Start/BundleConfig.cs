using System.Web;
using System.Web.Optimization;

namespace LMS
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/library/script").Include(
                        "~/Scripts/bootstrap.js",
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/angular.js",
                        "~/Scripts/angular-route.js",
                        "~/app/LibraryApp.js",
                        "~/app/HomeController.js",
                        "~/app/Book/bookController.js",
                        "~/app/Book/bookService.js"));

            bundles.Add(new StyleBundle("~/bundles/library/style").Include(
                      "~/Content/site.css",
                      "~/Content/bootstrap.css"));

            BundleTable.EnableOptimizations = false;
        }
    }
}
