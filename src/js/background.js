/*
 * Queue 'n Play is an application developed by Circularify
 */

 // WebRequest Listener
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {

	}, 
	{ urls: ["*://*.ytimg.com/*"]},
	["blocking"]
);

// Install listener
chrome.runtime.onInstalled.addListener(function(details){

	// i18n install message
	var lnInstallMsg = chrome.i18n.getMessage("installNotification");
	
	// SHOW INSTALL POPUP
	chrome.notifications.create("9312", {
		type: 'basic',
		iconUrl: chrome.extension.getURL('img/icon.128.png'),
		title: 'Queue \'n Play',
		message: lnInstallMsg
	}, null);
});

// Add Event Listener for Notifications
chrome.notifications.onClicked.addListener(function(notificationId) {

	// #SNP Update Notifications
	if(notificationId == "9312") {
	
		// Get version number and replace '.' with '-'
		var vnr = chrome.app.getDetails().version.replace('.', '-');
	
		// Navigate to our website
		chrome.tabs.create({'url': 'http://circularify.com/release/qnp/' + vnr });
	
	}

});