'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('createPost', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl',
		resolve: {
			newA: function(User, $stateParams){
				//console.log("id", $stateParams.userId);
				//$scope.newPost.username = $stateParams.username;
				return User.find($stateParams.userId).then(function(result){
					return result;
				});
			}
		}
		/*
				add a resolve block that has an author function which 
				users $stateParams to retrieve the author object
		*/
	})
})

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope, $state, $stateParams, Post, User, newA) {

	$scope.previewTrue = false;
	console.log(newA);
	$scope.preview = function() {
		//console.log("new", newP);

		$scope.previewTrue = !$scope.previewTrue;
		console.log("id", $stateParams.userId);
	}

	$scope.submit = function(newPost) {
		//$scope.author = newA;

		var auth = User.createInstance(newA);
		// console.log("newA", newA);
		console.log("author is created", auth);
		Post.create({"title": newPost.title, "author": auth, "body": newPost.body}).then(function(post){
			console.log("newP", post);
			$scope.newPost = post;
		});
		//console.log("newP", newP);
		// newP.save();
		// newP.DSRefresh();
		//console.log("POST is inserted", newP);
		// $scope.newPost = newPost;
		 $state.go("main");
	}
	/*

	TODOS: 
	1 - create the object that the form can use via ng-model
  2 - create a function that 
	 		a) persists the ng-modeled post object 
			b) changes the state to 'main'  

	*/
	
}) 