/**
 * Created by Julius Alvarado on 1/10/2018.
 */

(function () {
    "use strict";

    angular.module('myApp')
        .controller('mainDirCtrl', ['$scope',
            function ($scope) {
                $scope.user = {
                    name: 'julius alvarado',
                    address: {
                        street: "po box 489",
                        city: "Sacramento",
                        state: "Califoria"
                    },
                    friends: ["Vince", "Ary", "Edward"]
                };

                $scope.homeTitle = "built by julius3d.com";
            }
        ])
}());