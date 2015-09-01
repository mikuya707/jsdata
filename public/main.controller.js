'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
		// resolve: {
  //           allPosts: function(Post) {
  //               //return Post.findAll();
  //               return Post.index();
  //           }
  //       }
	})
})

app.controller('MainController', function($scope, Post) {
	//console.log(Post.findAll());
	Post.findAll().then(function(allPosts){
		console.log(allPosts);
		$scope.allPosts = allPosts;

	}).catch(function(err){throw err;});
 	/*
		TODOS: 
		1 - use js-data to retrieve all users and all posts
		(HINT: if you want to be fancy, add a resolve block to this state 
		and retrieve the data there)

 	*/
})


