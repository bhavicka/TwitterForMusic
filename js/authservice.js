angular.module('twitterApp.services', []).factory('authservice', function($q)
{

    var authorizationResult = false;
	
	
    return {
        initialize: function() {
            //initialize OAuth.io with public key of the application
            OAuth.initialize('Dr_-ajrgs8SEoLWXMkLR1EhWjKM', {cache:true});
            //try to create an authorization result when the page loads, this means a returning user won't have to click the twitter button again
            authorizationResult = OAuth.create('twitter');
			console.log("I'm initializing");
		},
			
        isReady: function() {
            return (authorizationResult);
        },
		
		clearCache: function(){
            OAuth.clearCache('twitter'); 
			authorizationResult = false;
		},
	
		
        connectTwitter: function() {
            var deferred = $q.defer();
            OAuth.popup('twitter', {cache:true}, function(error, result) { //cache means to execute the callback if the tokens are already present
                if (!error)
				{
                    authorizationResult = result.me().done(function(me) {
						alert('Hello ' + me.name + me.alias);
						console.log(me.name);
					});
				}
						
        
                else {
                    alert('An error occurred');
                }
            });
            return deferred.promise;
        }
		
    }
    
});