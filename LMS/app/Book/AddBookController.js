libraryApp.controller('addBookController',
    function addBookController($scope, $window, bookService) {
        $scope.book = bookService.getNewBook;

        $scope.save = function () {

            bookService.save($scope.book);
            $window.history.back();
        };

        $scope.cancel = function () {

            $window.history.back();
        };
    });
    
    
    