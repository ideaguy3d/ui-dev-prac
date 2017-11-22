myApp.controller('RegistrationController',
    ['$scope', 'Authentication', '$location',
        function ($scope, Authentication, $location) {
            // $scope.message = "";
            $scope.user = {};

            $scope.login = function () {
                Authentication.login($scope.user);
            };
            
            $scope.action1 = function(){
                console.log("some action...");
            };
            
            function SomeClass(){
                console.log("do something");
            }

            $scope.logout = function () {
                $location.path('/login');
                Authentication.logout();
            };

            $scope.register = function () {
                Authentication.register($scope.user);
            }; // register

        }]); // Controller