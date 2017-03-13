libraryApp.factory('bookService',
    function () {
        var getNewBook = function () {
            return {
                id: 0,
                name: ""
            };
        };
        
        var save = function (book) {
            return true;
        };
        
        return {
            getNewBook: getNewBook,
            save: save
        };
    });