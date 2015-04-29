//inject the twitterService into the controller
app.controller('loginCtrl', function($scope, $q, authservice) {

	$scope.user;
    authservice.initialize();
	$scope.screen_name;
	
    //when the user clicks the connect twitter button, the popup authorization window opens
    $scope.connectButton = function() {
        $scope.user = authservice.connectTwitter().then(function() {
            if (authservice.isReady()) {
				
                //if the authorization is successful, hide the connect button and display the tweets
                $('#connectButton').fadeOut(function(){
                    $('#signOut').fadeIn();
					
               });
            }
        });
    }

    //if the user is a returning user, hide the sign in button and display the tweets
    if (authservice.isReady()) 
	{
        $('#connectButton').hide();
        $('#signOut').show();
        
    }


});