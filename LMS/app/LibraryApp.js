var libraryApp = angular.module('libraryApp', ["ngRoute"]);

libraryApp.config(
    ["$routeProvider",
    function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/Home.html",
            controller: "HomeController"
        })
        
        .when("/addBook", {
            templateUrl: "app/Book/addBook.html",
            controller: "addBookController"
        })
        
        .when("/modifyBook", {
            templateUrl: "app/Book/modifyBook.html",
            controller: "modifyBookController"
        })

        .otherwise({
            redirectTo: "/home"
        });
}]);
