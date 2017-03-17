libraryApp.factory('bookService',
    ["$http",
        function ($http) {

        var save = function (book) {

            return $http.post("Book/Save", book);
        };
        
        return {
            save: save
        };
    }]);