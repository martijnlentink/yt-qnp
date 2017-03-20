/**
 * Queue 'n Play is an application developed by Circularify
 */

 // Add QNP to the Circularify list of installed extension
circularify.omni.register("qnp");

// Reference the required files 
circularify.omni.analytics.initialize('UA-50232941-4');
circularify.omni.page.injectScript('js/ytqnp.js');
circularify.omni.page.injectCss('css/ytqnp.css');

// Main method.
circularify.omni.page.injectScript(function (upgradeUrl, playlistUrl, plusUrl, miniUrl) {
	var circReady = function () {
		// We may be listening to the circReady event of the content script
		// In that case ignore it and wait for the page!
		if (typeof circularify === 'undefined')
			return;
		var _isRegistered = false;

		window.removeEventListener(circularify.core.events.circReady, this);
		circularify.utils.executeOrSubscribeOtherwise(2000, circularify.core.events.extRegistered, { id: 'snp' }, _snpRegistered, _failedToRegister);

		function _snpRegistered(ev) {
			circularify.debug.log(ev.detail);
			if (!circularify.utils.checkMinVersion('2.2.0', ev.detail.version))
				circularify.ytqnp.upgradePopup(upgradeUrl);
			else
				circularify.ytqnp.initialize(playlistUrl, plusUrl, miniUrl);
		}

		function _failedToRegister() {
			circularify.debug.log('Failed to find SNP');
			circularify.ytqnp.upgradePopup(upgradeUrl);
			circularify.omni.qnp.analytics.registerEvent('no-snp', 0, 0, 'qnp');
		}
		
		addEventListener("message", function(ev) {
				if(ev.data === "closePopup") {
					var ifr = document.getElementById("qnp-upgrade");
					ifr.parentNode.removeChild(ifr);
				}
		});

		return true;
	};
	(typeof circularify !== 'undefined' && circReady()) || window.addEventListener("circReady", circReady);
}, chrome.runtime.getURL('html/upgrade-snp.html'), chrome.runtime.getURL('html/playlist.html'), chrome.runtime.getURL('html/plus.html'), chrome.runtime.getURL('html/mini.html'));

