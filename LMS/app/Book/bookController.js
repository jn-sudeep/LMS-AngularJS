libraryApp.controller('bookController',
    ["$scope", "$window", "bookService",
    function bookController($scope, $window, bookService) {

        $scope.book = {};
        $scope.isProcessing = false;
        $scope.showOperations = false;

        $scope.getBooks = function () {
            $scope.isProcessing = true;

            bookService.getBooks().then(
                function (results) {

                    $scope.books = results.data;

                    if ($scope.books.length > 0) {
                        $scope.selectedBook = $scope.books[0];
                    }

                    $scope.isProcessing = false;
                },
                function (results) {

                    $scope.hasServerValidationErrors = true;
                    $scope.formErrors = results.data;

                    $scope.isProcessing = false;
                });
        };

        $scope.initiateOperation = function () {

            $scope.book = angular.copy($scope.selectedBook);
            $scope.showOperations = true;
        }

        $scope.save = function () {
            $scope.isProcessing = true;

            bookService.save($scope.book).then(
                function (results) {

                    $scope.isProcessing = false;
                    $window.history.back();
                },
                function (results) {

                    $scope.isProcessing = false;
                    $scope.hasServerValidationErrors = true;
                    $scope.formErrors = results.data;
                });
        };

        $scope.delete = function () {
            $scope.isProcessing = true;

            bookService.deleteBook($scope.book.id).then(
                function (results) {

                    $scope.isProcessing = false;
                    $window.history.back();
                },
                function (results) {

                    $scope.isProcessing = false;
                    $scope.hasServerValidationErrors = true;
                    $scope.formErrors = results.data;
                });
        };

        $scope.cancel = function () {

            $window.history.back();
        };
    }]);
    
    
    