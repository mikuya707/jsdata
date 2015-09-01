'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('createPost', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl',
		resolve: {
			newP: function(Post, $stateParams){
				
				return Post.createInstance({"authorId": $stateParams.userId});
			}
		}
		/*
				add a resolve block that has an author function which 
				users $stateParams to retrieve the author object
		*/
	})
})

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope, $stateParams, newP) {

	$scope.previewTrue = false;

	$scope.preview = function() {
		console.log("new", newP);
		$scope.previewTrue = !$scope.previewTrue;
		console.log("id", $stateParams.userId);
	}

	$scope.submit = function(newPost) {
		console.log(newPost);
	}
	/*

	TODOS: 
	1 - create the object that the form can use via ng-model
  2 - create a function that 
	 		a) persists the ng-modeled post object 
			b) changes the state to 'main'  

	*/
	
}) 