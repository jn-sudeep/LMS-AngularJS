libraryApp.controller('bookController',
    function bookController($scope, $window, bookService) {
        $scope.book = bookService.book;

        $scope.saveBook = function () {

            $window.history.back();
        };

        $scope.cancel = function () {

            $window.history.back();
        };

    });
    
    
    