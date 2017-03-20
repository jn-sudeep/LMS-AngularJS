using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using Root.Repository;
using Root.Repository.Models;
using Root.Repository.Exceptions;

namespace LMS.Controllers
{
    public class BookWebApiController : ApiController
    {
        public HttpResponseMessage Save([FromBody]Book book)
        {
            HttpResponseMessage response = new HttpResponseMessage();
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
                    response.StatusCode = HttpStatusCode.InternalServerError;
                    response.Content = new StringContent(ex.ErrorMessage);
                    return response;
                }
                catch (DataLayerException ex)
                {
                    response.StatusCode = HttpStatusCode.InternalServerError;
                    response.Content = new StringContent(ex.ErrorMessage);
                    return response;
                }

                response.StatusCode = HttpStatusCode.Created;
                response.Content = new StringContent("New book added.");
                return response;
            }

            if (!ModelState.IsValidField("Name"))
                errors.Add("Book Name is invalid.");

            response.StatusCode = HttpStatusCode.InternalServerError;
            response.Content = new StringContent(string.Join(",", errors));
            return response;
        }
    }
}