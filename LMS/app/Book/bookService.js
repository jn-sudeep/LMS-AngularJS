libraryApp.factory('bookService',
    ["$http",
        function ($http) {

        var save = function (book) {

            return $http.post("api/Book/Save", book);
        };
        
        return {
            save: save
        };
    }]);