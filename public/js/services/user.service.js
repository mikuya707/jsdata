'use  strict';

app.factory('User', function(DS) {
	
  /*
    create a User jsdata resource 
  */
  var User = DS.defineResource({
       name: 'users'
       // relations: {
       //      belongsTo: {
       //          users: {
       //              localField: 'author',
       //              localKey: 'authorId'
       //          }
       //      }
       //  }
  });//
return User;
}).run(function(User){});



