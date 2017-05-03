angular.module("libraryApp").controller('bookController',
    ["$scope", "$window", "bookService",
    function bookController($scope, $window, bookService) {

        $scope.book = {};                   // Creates a blank Book object used in Add Book operation
        $scope.isProcessing = false;        // Used for disabling control while client is awaiting server response
        $scope.showOperations = false;      // Used to show operation section in Modify or Delete

        // Load all books for Modify and Delete operations

        $scope.getBooks = function () {
            $scope.isProcessing = true;

            bookService.getBooks().then(
                function (successResult) {

                    $scope.books = successResult.data;

                    if ($scope.books.length > 0) {
                        $scope.selectedBook = $scope.books[0];
                    }

                    $scope.isProcessing = false;
                },
                function (failureResult) {

                    $scope.hasServerValidationErrors = true;
                    $scope.formErrors = failureResult.data;

                    $scope.isProcessing = false;
                });
        };

        // Start and Shows Modify and Delete section of selection of a book

        $scope.initiateOperation = function () {

            $scope.book = angular.copy($scope.selectedBook);
            $scope.showOperations = true;
        }

        // Add or Modify a book

        $scope.save = function () {
            $scope.isProcessing = true;

            bookService.save($scope.book).then(
                function (successResult) {

                    $scope.isProcessing = false;
                    $window.history.back();
                },
                function (failureResult) {

                    $scope.isProcessing = false;
                    $scope.hasServerValidationErrors = true;
                    $scope.formErrors = failureResult.data;
                });
        };

        // Delete a selected book

        $scope.delete = function () {
            $scope.isProcessing = true;

            bookService.deleteBook($scope.book.id).then(
                function (successResult) {

                    $scope.isProcessing = false;
                    $window.history.back();
                },
                function (failureResult) {

                    $scope.isProcessing = false;
                    $scope.hasServerValidationErrors = true;
                    $scope.formErrors = failureResult.data;
                });
        };

        // Cancels current opeartion and return to previous page

        $scope.cancel = function () {

            $window.history.back();
        };
    }]);
    
    
    