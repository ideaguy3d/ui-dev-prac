/**
 * Created by Julius Alvarado on 11/22/2017.
 */
myApp.controller('CheckInsController', ['$rootScope', '$scope', '$routeParams', '$firebaseAuth', '$firebaseArray',
    function ($rootScope, $scope, $routeParams, $firebaseAuth, $firebaseArray) {
        var ref;
        $scope.whichMeeting = $routeParams.meetingId;
        $scope.whichUser = $routeParams.userId;
    }]
);