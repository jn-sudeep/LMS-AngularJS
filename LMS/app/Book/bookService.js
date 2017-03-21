libraryApp.factory('bookService',
    ["$http",
        function ($http) {

            var getBooks = function () {

                return $http.get("api/Book/GetBooks");
            };

            var save = function (book) {

                return $http.post("api/Book/Save", book);
            };

            var deleteBook = function (id) {

                return $http.delete("api/Book/Delete/" + id);
            };

            return {
                getBooks: getBooks,
                deleteBook: deleteBook,
                save: save
            };
        }]);