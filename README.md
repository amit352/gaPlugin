# Google Analytics plugin for Cordova 2.4.0 on ANDROID
====================
A ANDROID Google Analytics SDK 2.0 plugin for Cordova 2.4.0

Setup:
---------------------

1)Move GAPlugin.js to your assets/www folder.

2)Move GAPlugin.java to src under com.plugins.gaplugin , or any other package (but don't forget to change package name).

3)Open res/xml/config.xml and add this line

&lt;plugin name="GAPlugin" value="com.plugins.gaplugin.GAPlugin" /&gt;  

NOTE: Change the package name to where GAPlugin is located.

5)Open androidManifest file and add these lines
&lt;uses-permission android:name="android.permission.INTERNET" /&gt;
&lt;uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" /&gt;

6)Open your HTML file and add
&lt;script type="text/javascript" charset="utf-8" src="GAPlugin.js" /&gt;

Example:
---------------------
	<script type="text/javascript">
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
			var GoogleAnalytics = window.plugins.GoogleAnalytics;
			GoogleAnalytics.init("UA-XXXXXXXX-X", function(){alert("success");}, function(){alert("failure");});
			GoogleAnalytics.sendEvent("Video", "Played", "playing xyx video", 1);
			GoogleAnalytics.dispatch();
		}
	</script>

Credit:
---------------------
The updated Google Analytics SDK from https://developers.google.com/analytics/devguides/collection/android/resources