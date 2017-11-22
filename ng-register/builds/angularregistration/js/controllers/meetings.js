/**
 * Created by Julius Alvarado on 11/21/2017.
 */
myApp.controller('MeetingsController', ['$scope', '$firebaseAuth', '$firebaseArray',
    function ($scope, $firebaseAuth, $firebaseArray) {
        $scope.message = "meeting data";
        var ref = firebase.database().ref();
        var auth = $firebaseAuth();
        auth.$onAuthStateChanged(function (authUser) {
            if (authUser) {
                var meetingsRef = ref.child('users').child(authUser.uid).child('meetings');
                var meetingsInfo = $firebaseArray(meetingsRef);
                $scope.meetings = meetingsInfo;
                $scope.addMeeting = function () {
                    meetingsInfo.$add({
                        name: $scope.meetingname,
                        date: firebase.database.ServerValue.TIMESTAMP
                    }).then(function () {
                        $scope.meetingname = '';
                    });
                };
                $scope.deleteMeeting = function (key) {
                    meetingsInfo.$remove(key);
                };
            }
        });
    }]);