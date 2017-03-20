libraryApp.factory('bookService',
    ["$http",
        function ($http) {

        var save = function (book) {

            return $http.post("api/BookWebApi/Save", book);
        };
        
        return {
            save: save
        };
    }]);