'use strict';

app.factory('Post', function(DS, $state) {

	/*

		TODOS: 
		1) create a js-data POST resource that establishes a relationship 
		between posts and users

		2) add a methods object to the resource
				a) add a `go` method that takes each post to the individual post page 
				(HINT: see post.js)

	*/

var Post = DS.defineResource({
        // basePath: '/api',
        name: 'posts',
        // idAttribute: '_id',
        relations: {
            belongsTo: {
                users: {
                    localField: 'author',
                    localKey: 'authorId'
                }
            }
        },
        methods: {
            go: function() {
                // Post.find(this._id)
                // .then(function(post) {
                    $state.go("post", { "postId": this._id});
                // });
            },
            // submit: function(){
            //     $state.go("post", { "postId": this._id});
            // }
            edit: function(){

            },
            delete: function(){

            }

            
        }
    

    //return Post;

});
// }).run(function(Post){
// 	return Post;
// });
return Post;
}).run(function(Post){});



