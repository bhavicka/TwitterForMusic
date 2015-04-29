//inject the twitterService into the controller
app.controller('logoutCtrl', function($scope, $q, authservice) {

    
    //sign out clears the OAuth cache, the user will have to reauthenticate when returning
    $scope.signOut = function()
	{
        authservice.clearCache();
        
        $('#signOut').fadeOut(function()
		{
            $('#connectButton').fadeIn();
        });
    }


});