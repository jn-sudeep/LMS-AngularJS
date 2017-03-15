libraryApp.factory('bookService',
    function () {
        var newBook = { id: 0, name: '' };
        
        var save = function (book) {
            return true;
        };
        
        return {
            newBook: newBook,
            save: save
        };
    });