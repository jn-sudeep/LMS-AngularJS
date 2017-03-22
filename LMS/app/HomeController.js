libraryApp.controller("HomeController",
    ["$scope", "$location",
    function ($scope, $location) {

        // Book Section

        $scope.addBook = function () {
            $location.path('/addBook');
        };

        $scope.modifyBook = function () {
            $location.path('/modifyBook');
        };

        $scope.deleteBook = function () {
            $location.path('/deleteBook');
        };

    }]);