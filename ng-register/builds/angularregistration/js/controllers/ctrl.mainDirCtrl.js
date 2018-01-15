/**
 * Created by Julius Alvarado on 1/10/2018.
 */

(function () {
    "use strict";

    angular.module('myApp')
        .controller('mainDirCtrl', ['$scope',
            function ($scope) {
                $scope.user1 = {
                    name: 'julius alvarado',
                    address: {
                        street: "po box 489",
                        city: "Sacramento",
                        state: "Califoria"
                    },
                    friends: ["Vince", "Ary", "Edward"]
                };

                $scope.user2 = {
                    name: 'vince vu',
                    address: {
                        street: "po box 557",
                        city: "Sacramento",
                        state: "Califoria"
                    },
                    friends: ["julius", "Ary", "Edward"]
                };

                $scope.homeTitle = "built by julius3d.com";
            }
        ])
}());