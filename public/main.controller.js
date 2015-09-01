'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
		resolve: {
			allUsers: function(User){
				return User.findAll()
			},
            allPosts: function(Post, allUsers) {
                return Post.findAll();
            }
        }
	})
})

app.controller('MainController', function($scope, Post, allPosts) {
	//console.log(Post.findAll());
	// Post.findAll().then(function(allPosts){
	// 	console.log(allPosts);
	$scope.allPosts = allPosts;

	// }).catch(function(err){throw err;});
	
	console.log('all: ', allPosts)



})


