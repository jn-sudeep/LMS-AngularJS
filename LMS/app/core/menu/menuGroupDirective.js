"use strict"

angular.module('menu').directive('menuGroup', function () {

    return {
        require: '^menu',
        transclude: true,
        scope: {
            label: '@',
            icon: '@'
        },
        templateUrl: 'app/core/menu/menuGroupTemplate.html',
        link: function (scope, el, attr, ctrl) {
            scope.isOpen = false;

            scope.closeMenu = function () {
                scope.isOpen = false;
            };

            scope.clicked = function () {
                scope.isOpen = !scope.isOpen;
            }
        }
    };
});