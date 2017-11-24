/**
 * Created by Julius Alvarado on 11/22/2017.
 */
myApp.controller('CheckInsController', ['$rootScope', '$scope', '$routeParams', '$firebaseObject',
    '$location', '$firebaseArray',
    function ($rootScope, $scope, $routeParams, $firebaseObject, $location, $firebaseArray) {
        var ref;
        $scope.whichmeeting = $routeParams.meetingId;
        $scope.whichuser = $routeParams.userId;

        ref = firebase.database().ref().child('users').child($scope.whichuser)
            .child('meetings').child($scope.whichmeeting).child('checkins');

        $scope.checkins = $firebaseArray(ref);

        $scope.addCheckin = function () {
            $firebaseArray(ref).$add({
                firstname: $scope.user.firstname,
                lastname: $scope.user.lastname,
                email: $scope.user.email,
                date: firebase.database.ServerValue.TIMESTAMP
            }).then(function(res){
                console.log("jha - response after adding data via fbArr = ");
                console.log(res);
                $location.path('/checkins/'+$scope.whichuser+'/'+$scope.whichmeeting+'/checkinsList');
            });
        };

        $scope.deleteCheckin = function(id){
            var refDel = ref.child(id);
            var recordObj = $firebaseObject(refDel);
            recordObj.$remove(id);
        }
    }]
);