"use strict"

angular.module('menu').directive('menuItem', function () {

    return {
        require: '^menu',
        scope: {
            label: '@',
            icon: '@',
            route: '@'
        },
        templateUrl: 'app/core/menu/menuItemTemplate.html',
        link: function (scope, el, attr, ctrl) {

            scope.isActive = function () {
                return el === ctrl.getActiveItem();
            };

            el.on('click', function (evt) {
                evt.stopPropagation();
                evt.preventDefault();

                scope.$apply(function () {
                    ctrl.setActiveItem(el);
                    ctrl.setRoute(scope.route);
                });
            });
        }
    };
});