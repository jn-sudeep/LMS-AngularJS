libraryApp.controller('addBookController',
    ["$scope", "$window", "bookService",
    function addBookController($scope, $window, bookService) {

        $scope.book = {};
        $scope.isSaving = false;

        $scope.save = function () {
            $scope.isSaving = true;

            bookService.save($scope.book).then(
                function (results) {

                    $scope.isSaving = false;
                    $window.history.back();
                },
                function (results) {

                    $scope.isSaving = false;
                    $scope.hasServerValidationErrors = true;
                    $scope.formErrors = results.data;
                });
        };

        $scope.cancel = function () {

            $window.history.back();
        };
    }]);
    
    
    