//create js element in header
//var fbLike = document.getElementById("fbLike");
//fbLike.style.visibility="hidden";
//'404839423029580'	
(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

initApp=function(request){
	FB.init({
	  appId      : request.app_id,
	  xfbml      : true,
	  version    : 'v2.2'
	});
	window.fbAsyncInit = function() {
		FB.init({
		  appId      : request.app_id,
		  xfbml      : true,
		  version    : 'v2.2'
		});
	};
};

onLogin=function(response) {
  if (response.status == 'connected') {
	FB.api('/me?fields=first_name', function(data) {
	  var welcomeBlock = document.getElementById('fb-welcome');
	  welcomeBlock.innerHTML = 'Hello, ' + data.first_name + '!';
	});
  }
};
getLoginStatus=function(request){
FB.getLoginStatus(function(response) {
  // Check login status on load, and if the user is
  // already logged in, go directly to the welcome message.
  if (response.status == 'connected') {
	onLogin(response);
  } else {
	// Otherwise, show Login dialog first.
	FB.login(function(response) {
	  onLogin(response);
	}, {scope: request.scope});
  }
});
};

//log our data to console
logMe=function(val){
	console.log(val);
};

//swf object load the game
loadGame=function(){
	params.quality = "high";
	params.bgcolor = "#000000";
	params.wmode='opaque';
	params.allowscriptaccess = "always";
	params.allowFullScreen = "true";
	params.allowFullScreenInteractive = "true";
	params.menu = false;
	var attributes = {};
	attributes.name = "flashContent";
	attributes.align = "middle";
	swfobject.embedSWF("flashSwf.swf", "flashContent", null,null,"10.2", params,params, params, attributes); 	
};	

viewLike=function (request){
	//logMe("liked liked");
	var fbLike = document.getElementById("fbLike");
	fbLike.style.visibility="visible";
	if(request!=null)
		fblike.style.pointerEvents='none';
		
	FB.Event.subscribe('edge.create',function(response) {
			//flashContentCallback(response);
			logMe('liked');
			fblike.style.pointerEvents='none';
		}
	);
};
//reload the page
reloadPage=function(){
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		top.window.location.href="//apps.facebook.com/spongepoker/?start_session=true";
		self.parent.location.reload();
	}
	else
	{// code for IE6, IE5
		window.top.location.href="//apps.facebook.com/spongepoker/?start_session=true";
		self.parent.location.reload();
	}
};
flashContentCallback=function(response){
	window.document.flashContent.callback(response);
};
