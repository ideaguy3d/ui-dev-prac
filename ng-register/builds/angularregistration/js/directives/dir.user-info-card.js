/**
 * Created by Julius Alvarado on 1/10/2018.
 */

(function(){
    "use strict";

    angular.module('myApp')
        .directive('jaUserInfoCard', [
            function(){
                return {
                    templateUrl: 'js/directives/temps/temp.user-info-card.html',
                    restrict: 'E'
                }
            }
        ])
}());