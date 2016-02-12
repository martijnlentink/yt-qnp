/**
 * Queue 'n Play is an application developed by Circularify
 */

 // Add QNP to the Circularify list of installed extension
circularify.omni.register("qnp");

// Reference the required files 
circularify.omni.analytics.initialize('UA-50232941-4');
circularify.omni.page.injectScript('js/dd.js');
circularify.omni.page.injectScript('js/ytqnp.js');
circularify.omni.page.injectCss('css/ytqnp.css');

// Main method.
circularify.omni.page.injectScript(function () {
	
	window.addEventListener("extRegistered", _extensionRegisteredEventHandler);

	// Navigating function
	function _qnpNavigating(ev)
	{
		circularify.ytqnp.navigating(ev.detail.url);
	}

	function _registerPlayerEvents() {
		// So if Seek 'n Play is installed, subscribe to the events
		var player = circularify.ytapi.getPlayer();
		// Subscribe to the onStateChange event on the player object
		player.addEventListener("onStateChange", circularify.ytqnp.next);
	}
	
	// Subscribe QNP
	function _extensionRegisteredEventHandler(ev) {
		// We want the extension to work only when Seek 'n Play is installed
		if(ev.detail.id == "snp") {
			if (circularify.ytapi.isPlayerReady)
				_registerPlayerEvents();
			else
				window.addEventListener("ytPlayerReady", _registerPlayerEvents);
		}
		if(ev.detail.id == "qnp") {
			window.addEventListener("spfdone", _qnpNavigating);
		}
	}

	window.yttqrcooldown = 0;
});

