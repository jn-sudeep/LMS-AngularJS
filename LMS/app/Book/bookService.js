libraryApp.factory('bookService',
    ["$http",
        function ($http) {
        var newBook = { id: 0, name: '' };
      
        var getBooks = function () {
            return $http.get("Book/GetBooks");
        }

        var save = function (book) {
            return true;
        };
        
        return {
            newBook: newBook,
            getBooks: getBooks,
            save: save
        };
    }]);