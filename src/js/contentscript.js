/**
 * Queue 'n Play is an application developed by Circularify
 */

// Reference the required files 
circularify.omni.analytics.initialize('UA-50232941-4');
circularify.omni.page.injectScript('js/dd.js');
circularify.omni.page.injectScript('js/ytqnp.js');
circularify.omni.page.injectCss('css/ytqnp.css');

// Main method.
circularify.omni.page.injectScript(function () {
	
	window.addEventListener("extRegistered", _extensionRegisteredEventHandler);

	// Navigating function
	function _qnpNavigating()
	{
		circularify.ytqnp.navigating();
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
			
			circularify.mailoffice.subscribe(_qnpNavigating);				
		}
	}

	window.yttqrcooldown = 0;
});

