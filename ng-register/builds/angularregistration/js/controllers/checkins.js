/**
 * Created by Julius Alvarado on 11/22/2017.
 */
myApp.controller('CheckInsController', ['$rootScope', '$scope', '$routeParams', '$firebaseObject',
    '$location', '$firebaseArray',
    function ($rootScope, $scope, $routeParams, $firebaseObject, $location, $firebaseArray) {
        $scope.whichmeeting = $routeParams.meetingId;
        $scope.whichuser = $routeParams.userId;
        $scope.order = 'firstname';
        $scope.direction = null;
        $scope.query = '';
        $scope.recordId = '';
        var ref = firebase.database().ref().child('users').child($scope.whichuser)
            .child('meetings').child($scope.whichmeeting).child('checkins');
        var checkinsList = $firebaseArray(ref);
        $scope.checkins = checkinsList;

        $scope.showLove = function(myCheckin){
            myCheckin.show = !myCheckin.show; 
        };

        $scope.pickRandom = function () {
            var whichRecord = Math.round(Math.random() * (checkinsList.length - 1))
            $scope.recordId = checkinsList.$keyAt(whichRecord);
        };

        $scope.addCheckin = function () {
            $firebaseArray(ref).$add({
                firstname: $scope.user.firstname,
                lastname: $scope.user.lastname,
                email: $scope.user.email,
                date: firebase.database.ServerValue.TIMESTAMP
            }).then(function (res) {
                console.log("jha - response after adding data via fbArr = ");
                console.log(res);
                $location.path('/checkins/' + $scope.whichuser + '/' + $scope.whichmeeting + '/checkinsList');
            });
        };

        $scope.deleteCheckin = function (id) {
            var refDel = ref.child(id);
            var recordObj = $firebaseObject(refDel);
            recordObj.$remove(id);
        }
    }]
);