/**
 * Created by Julius Alvarado on 1/10/2018.
 */

(function () {
    "use strict";

    angular.module('myApp')
        .directive('jaUserInfoCard', [
            function () {
                return {
                    templateUrl: 'js/directives/temps/temp.user-info-card.html',
                    restrict: 'E',
                    scope: {
                        user: '=',
                        initialCollapsed: '@collapsed'
                    },
                    controller: function ($scope) {
                        $scope.collapsed = ($scope.initialCollapsed === 'true');
                        $scope.removing = false;
                        $scope.startRemove = function () {
                            $scope.removing = true;
                        };
                        $scope.cancelRemove = function () {
                            $scope.removing = false;
                        };
                        $scope.removeFriend = function(friend){
                            var idx = $scope.user.friends.indexOf(friend);
                            if(idx > -1) {
                                $scope.user.friends.splice(idx, 1);
                            }
                        };
                        $scope.knightMe = function (user) {
                            user.rank = "Knight Mode";
                        };

                        $scope.collapse = function () {
                            $scope.collapsed = !$scope.collapsed;
                        }
                    }
                }
            }
        ]);

    angular.module('myApp').directive('address', function () {
        return {
            restrict: 'E',
            templateUrl: 'js/directives/temps/temp.user-info-card-address.html',
            scope: true, // inherited scope
            controller: function ($scope) {
                $scope.collapsed = false;

                $scope.collapseAddress = function () {
                    $scope.collapsed = true;
                };

                $scope.expandAddress = function () {
                    $scope.collapsed = false;
                }
            }
        }
    })
}());