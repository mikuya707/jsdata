'use strict';

app.config(function($stateProvider) {

	$stateProvider.state('signup', {
		url: '/signup',
		templateUrl: 'js/signup/signup.html',
		controller: 'SignupCtrl'
	})
})

// add necessary dependencies here
app.controller('SignupCtrl', function(User, $scope, $state) {
  $scope.signup = {
    username: null,
    password: null
  };
   $scope.sendSignup = function(signup){
      console.log(signup);
      //{"username": signup.username, "password": signup.password}
        User.create(signup).then(function(element){
          console.log("userid", element._id);
            $state.go('createPost',{"userId": element._id});
        })
        
   }

  /*
  TODOS: 
  1 - create the signup object for ng-modelling
  2 - create a `sendSignup` function that
      a) persists the user data 
      b) changes the state to  'create' while sending along important user data
      (HINT: $stateParams)

  */

})