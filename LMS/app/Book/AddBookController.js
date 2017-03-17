libraryApp.controller('addBookController',
    ["$scope", "$window", "bookService",
    function addBookController($scope, $window, bookService) {

        $scope.book = {};

        $scope.save = function () {

            bookService.save($scope.book).then(
                function (results) {
                    alert("Success");
                    $window.history.back();
                },
                function (results) {
                    $scope.hasServerValidationErrors = true;
                    $scope.formErrors = results.statusText;
                });
        };

        $scope.cancel = function () {

            $window.history.back();
        };
    }]);
    
    
    