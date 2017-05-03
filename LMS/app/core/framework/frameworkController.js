angular.module("framework").controller("frameworkController",
    ["$scope", "$location", 
        function ($scope, $location) {

            $scope.$on('menu-item-selected-event', function (evt, data) {
                $location.path('/' + data.route);
            });
        }
    ]);