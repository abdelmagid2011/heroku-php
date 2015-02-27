//create js element in header
loadJS=function(src){
	var ga = document.createElement('script'); 
	ga.type = 'text/javascript'; 
	//ga.async = true;
	ga.src = src;
	var s = document.getElementsByTagName('script')[0]; 
	s.parentNode.insertBefore(ga, s);
}
//log our data to console
logMe=function(val){
	//console.log(val);
};

//swf object load the game
loadGame=function(param){
var params = {params:param};
params.quality = "high";
params.bgcolor = "#000000";
params.wmode='opaque';
params.allowscriptaccess = "always";
params.menu = false;
var attributes = {};
attributes.name = "flashContent";
attributes.align = "middle";
swfobject.embedSWF("SpongePoker_2014_10_16_1003.swf", "flashContent", "770", "830","10.2", params,params, params, attributes); 	
}	
//like our page	
viewLikeOld=function (liked){
	//logMe("liked liked");
	liked=liked||"";
	var fjs = document.getElementById("flashContent");
	var js = document.createElement("iframe");
	js.src = "like.html";
	js.frameBorder ='0' ;
	
	var dv = document.createElement("div");
	js.width='130';
	js.height="33";
	js.scrolling='no';
	dv.className="fixedPos";
	dv.id="fbLike";

	var cen=document.createElement("div");
	cen.className="innerDiv";
	cen.appendChild(js);
	dv.appendChild(cen);
	cen.style.visibility="hidden";
	//console.log("like it111");
	js.onload=onFrameLoaded(cen);
	document.body.appendChild(dv, fjs);
};
viewLike=function (liked){
	//logMe("liked liked");
	var fbLike = document.getElementById("fbLike");
	fbLike.style.visibility="visible";
	//alert("visible"+liked);
	FB.Event.subscribe('edge.create',function(response) {
			//var fbLike = document.getElementById("fbLike");
			
			fbLike.style.visibility="hidden";
			//alert("like clicked");
			window.document.flashContent.likeClicked();
		}
	);
};

onFrameLoaded=function(cen){
	//console.log("like it");
	//cen.style.visibility="visible";
	setTimeout(function(){cen.style.visibility="visible";},1000);
};

//check problem in facebook sdk reload
verifyFB = function (){
	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			console.log(xmlhttp.responseText);
			if(xmlhttp.responseText=="[true]"){
				//alert(xmlhttp.responseText);
				//reloadPage();
				
			}
		}
		
	}
	xmlhttp.open("GET","/game/facebook/userInfo.php",false);
	xmlhttp.send();
};
setTimeout(verifyFB,1000);

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

//google analytics


