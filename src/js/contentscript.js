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
			// We want the extension to work only when Seek 'n Play is installed
			if(circularify.exts &&
				circularify.exts.installed &&
				circularify.exts.installed[0].id == "9310") {
	
				// So if Seek 'n Play is installed, subscribe to the events
				_subscribe();
				circularify.mailoffice.subscribe(_qnpNavigating);				
			}
			
			clearTimeout(this);
		}
	}, 1000);

	
	/// Drag & Drop events
	
	function qnpAllow(ev)
	{
		ev.preventDefault();
	}
	
	function qnpDrag(ev)
	{
		ev.dataTransfer.setData("text", ev.target.id);
	}
	
	function qnpDrop(ev)
	{
		ev.preventDefault();
		var data = ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
	}
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

// Inject GA
inject(function(){
	
	setTimeout(function() {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','yttqr');

		yttqr('create', 'UA-50232941-4', 'auto');
	}, 1000);
})
