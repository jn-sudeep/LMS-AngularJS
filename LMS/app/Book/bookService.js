libraryApp.factory('bookService',
    ["$http",
        function ($http) {

        var save = function (book) {

            return $http.post("api/BookWebApi/Post", book);
        };
        
        return {
            save: save
        };
    }]);