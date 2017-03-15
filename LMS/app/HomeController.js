libraryApp.controller("HomeController",
    ["$scope", "$location",
    function ($scope, $location) {

        $scope.addBook = function () {
            $location.path('/addBook');
        };

    }]);