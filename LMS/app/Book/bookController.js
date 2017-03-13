libraryApp.controller('bookController',
    function bookController($scope, bookService) {
        $scope.book = bookService.book;

        $.saveBook = function () {

            var temp = true;
        }
    });
    
    
    