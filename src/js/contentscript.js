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
circularify.omni.page.injectScript(function (upgradeUrl) {
	window.addEventListener("circReady", function () {
		// We may be listening to the circReady event of the content script
		// In that case ignore it and wait for the page!
		if (typeof circularify === 'undefined')
			return;

		window.removeEventListener(circularify.core.events.circReady, this);
		circularify.utils.executeOrSubscribeOtherwise(2000, circularify.core.events.extRegistered, { id: 'snp' }, _snpRegistered, _failedToRegister);
		circularify.utils.executeOrSubscribe(circularify.core.events.extRegistered, _qnpRegistered, { id: 'qnp' });

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

		function _snpRegistered(ev) {
			circularify.debug.log(ev.detail);
			if (!circularify.utils.checkMinVersion('2.2.0', ev.detail.version))
			{
				circularify.ytqnp.upgradePopup(upgradeUrl);
				return;
			}
			if (circularify.ytapi.isPlayerReady)
				_registerPlayerEvents();
			else
				window.addEventListener("ytPlayerReady", _registerPlayerEvents);
		}

		function _qnpRegistered(ev) {
			window.addEventListener("spfdone", _qnpNavigating);
		}

		function _failedToRegister() {
			circularify.debug.log('Failed to find SNP');
			circularify.ytqnp.upgradePopup(upgradeUrl);
		}

		window.yttqrcooldown = 0;
		
		addEventListener("message", function(ev) {
				if(ev.data === "closePopup") {
					var ifr = document.getElementById("qnp-upgrade");
					ifr.parentNode.removeChild(ifr);
				}
		});
	});
}, chrome.runtime.getURL('html/upgrade-snp.html'));

