<html>
	<header>
	</header/>
	<body>
		<div class="fb-like" data-send="true" data-width="450" data-show-faces="true">
		</div>
		<h1 id="fb-welcome"></h1>
		<script>
		  window.fbAsyncInit = function() {
			FB.init({
			  appId      : '404839423029580',
			  xfbml      : true,
			  version    : 'v2.2'
			});

			// ADD ADDITIONAL FACEBOOK CODE HERE
		  };

		  (function(d, s, id){
			 var js, fjs = d.getElementsByTagName(s)[0];
			 if (d.getElementById(id)) {return;}
			 js = d.createElement(s); js.id = id;
			 js.src = "//connect.facebook.net/en_US/sdk.js";
			 fjs.parentNode.insertBefore(js, fjs);
		   }(document, 'script', 'facebook-jssdk'));
		   
		   function onLogin(response) {
			  if (response.status == 'connected') {
				FB.api('/me?fields=first_name', function(data) {
				  var welcomeBlock = document.getElementById('fb-welcome');
				  welcomeBlock.innerHTML = 'Hello, ' + data.first_name + '!';
				});
			  }
			}

			FB.getLoginStatus(function(response) {
			  // Check login status on load, and if the user is
			  // already logged in, go directly to the welcome message.
			  if (response.status == 'connected') {
				onLogin(response);
			  } else {
				// Otherwise, show Login dialog first.
				FB.login(function(response) {
				  onLogin(response);
				}, {scope: 'user_friends, email'});
			  }
			});
		</script>
	</body>
</html>