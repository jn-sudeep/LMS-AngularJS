using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Threading;

using Root.Repository;
using Root.Repository.Models;
using Root.Repository.Exceptions;
using LMS.Core;

namespace LMS.Controllers
{
    public class BookController : ApiController
    {
        public HttpResponseMessage GetBooks()
        {
            HttpResponseMessage response = new HttpResponseMessage();

            try
            {
                LibraryRepository libraryRepository = new LibraryRepository(Constants.ConnectionString);
                response.StatusCode = HttpStatusCode.OK;
                response.Content = new ObjectContent(typeof(List<Book>), libraryRepository.GetBooks(), GlobalConfiguration.Configuration.Formatters.JsonFormatter);
                return response;                        
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
        }

        public HttpResponseMessage Save([FromBody]Book book)
        {
            HttpResponseMessage response = new HttpResponseMessage();

            if (ModelState.IsValid)
            {
                try
                {
                    LibraryRepository libraryRepository = new LibraryRepository(Constants.ConnectionString);
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
                return response;
            }

            if (!ModelState.IsValidField("Name"))
            {
                response.StatusCode = HttpStatusCode.InternalServerError;
                response.Content = new StringContent("Book Name is invalid.");
            }

            return response;
        }

        public void Delete(int id)
        {
            HttpResponseMessage response = new HttpResponseMessage();

            try
            {
                LibraryRepository libraryRepository = new LibraryRepository(Constants.ConnectionString);
                libraryRepository.DeleteBook(id);
            }
            catch (DataDependencyException ex)
            {
                response.StatusCode = HttpStatusCode.InternalServerError;
                response.Content = new StringContent(ex.ErrorMessage);
                //return response;
            }
            catch (DataLayerException ex)
            {
                response.StatusCode = HttpStatusCode.InternalServerError;
                response.Content = new StringContent(ex.ErrorMessage);
                //return response;
            }

            response.StatusCode = HttpStatusCode.OK;
            response.Content = new StringContent("Book deleted.");
            //return response;
        }
    }
}