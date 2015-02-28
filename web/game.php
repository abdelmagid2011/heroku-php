<?php
?>
<html>
	<header>
		<script src="scripts/scripts.js"></script>
	</header/>
	<body onload="onLoadComplete()">
		<div id="fbLike" style="">
		</div>
		<h1 id="fb-welcome"></h1>
		<div>
			 <input type="button" value="Init application" onclick="initApp({app_id:'404839423029580',scope:'user_friends, email'});">
			 <input type="button" value="getLoginStatus" onclick="getLoginStatus({app_id:'404839423029580',scope:'user_friends, email'});">
			 <input type="button" value="ViewLike" onclick="viewLike(null);">
		</div>
	</body>
</html>