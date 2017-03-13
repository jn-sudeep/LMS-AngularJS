var libraryApp = angular.module('libraryApp', ["ngRoute"]);

libraryApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/Home.html",
            controller: "HomeController"

        })
        
        .when("/newBookForm", {
            templateUrl: "app/Book/bookTemplate.html",
            controller: "bookController"
        })
        
        .otherwise({
            redirectTo: "/home"
        });
});

libraryApp.controller("HomeController",
    function ($scope, $location) {

        $scope.addNewBook = function () {
            $location.path('/newBookForm');
        };

    });