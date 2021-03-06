﻿"use strict"

angular.module('menu').controller('menuController',
    ["$scope", "$rootScope", 
    function ($scope, $rootScope) {

            this.getActiveItem = function () {
                return $scope.activeElement;
            };

            this.setActiveItem = function (el) {
                $scope.activeElement = el;
            };

            this.setRoute = function (route) {
                $rootScope.$broadcast('menu-item-selected-event', { route: route });
            };
        }
]);