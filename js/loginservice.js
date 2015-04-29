angular.module('twitterApp.services', []).factory('loginservice', function($q)
{

    var authorizationResult = false;

    return {
        initialize: function() {
            //initialize OAuth.io with public key of the application
            OAuth.initialize('Dr_-ajrgs8SEoLWXMkLR1EhWjKM', {cache:true});
            //try to create an authorization result when the page loads, this means a returning user won't have to click the twitter button again
            authorizationResult = OAuth.create('twitter');
        },
        isReady: function() {
            return (authorizationResult);
        },
        connectTwitter: function() {
            var deferred = $q.defer();
            OAuth.popup('twitter', {cache:true}, function(error, result) { //cache means to execute the callback if the tokens are already present
                if (!error)
				{
                    authorizationResult = result;
          		
					result.me().done(function(data)
					{
						console.log("Does OAuth even return users bro?:"+data.alias) 		//twitter handleEvent
						console.log("Does OAuth even return users bro?:"+data.name)			//screen name 
						return data;
					})
					
                } else {
                    //do something if there's an error
                }
            });
            return deferred.promise;
        }

    }
    
});