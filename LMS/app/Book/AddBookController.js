libraryApp.controller('addBookController',
    ["$scope", "$window", "bookService",
    function addBookController($scope, $window, bookService) {

        $scope.book = bookService.newBook;

        $scope.save = function () {

            bookService.save($scope.book);
            $window.history.back();
        };

        $scope.cancel = function () {

            $window.history.back();
        };
    }]);
    
    
    