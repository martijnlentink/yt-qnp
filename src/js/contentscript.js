/*
 * Queue 'n Play is an application developed by Circularify
 */
 
// Inject extension files
injectLf("chrome-extension://hfkeoiiodkbeflgjeifnjjcpjeoglcck/js/core/modules.js");
injectLf("chrome-extension://hfkeoiiodkbeflgjeifnjjcpjeoglcck/js/core/ytqnp.js");

injectCss(".qnp-button { display: block; margin-top: -23px; margin-left: 2px; position: absolute; background: no-repeat url('http://s.ytimg.com/yts/imgbin/www-hitchhiker-vfl827A2L.webp') -462px -343px; background-color: #f0f0f0; background-size: auto; width: 20px; height: 21px; }");
injectCss(".qnp-button:hover { display: block; margin-top: -23px; margin-left: 2px; position: absolute; background: no-repeat url('http://s.ytimg.com/yts/imgbin/www-hitchhiker-vfl827A2L.webp') -462px -343px; background-color: #f0f0f0; background-size: auto; width: 20px; height: 21px; }");

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