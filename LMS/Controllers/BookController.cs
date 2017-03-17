using System;
using System.Collections.Generic;
using System.Net;
using System.Web.Mvc;

using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

using Root.Repository;
using Root.Repository.Models;
using Root.Repository.Exceptions;

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

        public ActionResult Save(Book book)
        {
            List<string> errors = new List<string>();

            if (ModelState.IsValid)
            {
                try
                {
                    LibraryRepository libraryRepository = new LibraryRepository();
                    libraryRepository.SaveBook(book);
                }
                catch (DataDuplicityException ex)
                {
                    return new HttpStatusCodeResult(HttpStatusCode.InternalServerError, ex.ErrorMessage);
                }
                catch (DataLayerException ex)
                {
                    return new HttpStatusCodeResult(HttpStatusCode.InternalServerError, ex.ErrorMessage);
                }

                return new HttpStatusCodeResult(HttpStatusCode.Created, "New book added.");
            }

            if (!ModelState.IsValidField("Name"))
                errors.Add("Book Name is invalid.");

            return new HttpStatusCodeResult(HttpStatusCode.InternalServerError, string.Join(",", errors));
        }
    }
}