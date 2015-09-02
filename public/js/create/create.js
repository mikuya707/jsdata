'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('createPost', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl',
		resolve: {
			theAuthor: function(User, $stateParams) {
				return User.find($stateParams.userId);
			}
		}
		/*
				add a resolve block that has an author function which 
				users $stateParams to retrieve the author object
		*/
	})
})

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope, $stateParams, Post, theAuthor, $state) {

	$scope.previewTrue = false;

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	}


	$scope.createNewPost = function(newPost) {
		newPost.author = theAuthor;
		console.log(newPost);
		Post.create(newPost).then(function(){
			$state.go('main');
		})
	}

	// TODOS: 
	// 1 - create the object that the form can use via ng-model
 //  2 - create a function that 
	//  		a) persists the ng-modeled post object 
	// 		b) changes the state to 'main'  

	
	
}) 