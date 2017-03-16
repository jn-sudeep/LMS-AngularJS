using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

using LMS.Models;

namespace LMS.Controllers
{
    public class BookController : Controller
    {
        public ActionResult GetBooks()
        {
            List<Book> books = new List<Book>()
            {
                new Book { ID = 1, Name = "Programming" },
                new Book { ID = 2, Name = "Testing"}
            };

            var camelCaseFormatter = new JsonSerializerSettings();
            camelCaseFormatter.ContractResolver = new CamelCasePropertyNamesContractResolver();

            var jsonResult = new ContentResult
            {
                Content = JsonConvert.SerializeObject(books, camelCaseFormatter),
                ContentType = "application/json"
            };

            return jsonResult;
        }
    }
}