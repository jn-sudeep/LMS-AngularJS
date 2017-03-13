libraryApp.controller("HomeController",
    function ($scope, $location) {

        $scope.addBook = function () {
            $location.path('/addBook');
        };

    });