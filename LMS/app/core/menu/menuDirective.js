"use strict"

angular.module('menu').directive('menu', function () {

    return {
        transclude: true,
        scope:{
        },

        templateUrl: 'app/core/menu/menuTemplate.html',
        controller: 'menuController',
        link: function (scope, el, attr) {
        }
    };
});