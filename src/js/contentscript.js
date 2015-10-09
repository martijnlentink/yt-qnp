/*
 * Queue 'n Play is an application developed by Circularify
 */

// Reference the required files 
var modulesJs = chrome.extension.getURL('js/core/modules.js');
var ytqnpJs = chrome.extension.getURL('js/core/ytqnp.js');
var ytqnpCss = chrome.extension.getURL('css/ytqnp.css');
 
// Inject extension files
injectLf(modulesJs);
injectLf(ytqnpJs);
injectLcf(ytqnpCss);

// Main method.
inject(function () {
		
	// Navigating function
	function _qnpNavigating()
	{
		circularify.ytqnp.navigating();
	}	
	
	// Subscribe to the onStateChange event on the player object
	function _subscribe()
	{
		var player = circularify.ytapi.getPlayer();
		player.addEventListener("onStateChange", circularify.ytqnp.next);
	}
	
	// Subscribe QNP
	setTimeout(function() {
		if(circularify !== undefined)
		{
			_subscribe();
			circularify.mailoffice.subscribe(_qnpNavigating);
			clearTimeout(this);
		}
	}, 1000);	
});

// Inject linked file
function injectLf(fn) {
	var script = document.createElement('script');
	script.src = fn;
	document.body.appendChild(script);
}

// Inject linked css file
function injectLcf(fn) {
	var link = document.createElement('link');
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = fn;
	document.body.appendChild(link);
}

// Inject function
function inject(fn) {
	var script = document.createElement('script');
	script.innerHTML = '(' + fn.toString() + ')();';
	document.body.appendChild(script);
}

// Inject some CSS
function injectCss(css) {
	var element = document.createElement('style');
	element.innerHTML = css.toString();
	document.head.appendChild(element);
}