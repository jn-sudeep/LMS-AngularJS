libraryApp.factory('bookService',
    ["$http",
        function ($http) {

            // Loads all books

            var getBooks = function () {

                return $http.get("api/Book/GetBooks");
            };

            // Add or Modify a book

            var save = function (book) {

                return $http.post("api/Book/Save", book);
            };

            // Delete a book

            var deleteBook = function (id) {

                return $http.delete("api/Book/Delete/" + id);
            };

            return {
                getBooks: getBooks,
                deleteBook: deleteBook,
                save: save
            };
        }]);