angular.module('twitterApp.services', []).factory('logoutservice', function($q)
{
	return 
	{
		clearCache: function(){
            OAuth.clearCache('twitter'); 
		}
	}
});