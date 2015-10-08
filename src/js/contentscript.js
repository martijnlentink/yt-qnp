/*
 * Queue 'n Play is an application developed by Circularify
 */
 
// Inject extension files
injectLf("chrome-extension://hfkeoiiodkbeflgjeifnjjcpjeoglcck/js/core/modules.js");
injectLf("chrome-extension://hfkeoiiodkbeflgjeifnjjcpjeoglcck/js/core/ytqnp.js");

injectLcf("chrome-extension://hfkeoiiodkbeflgjeifnjjcpjeoglcck/css/ytqnp.css");

/*
injectCss(".qnp-button { display: block; margin-top: -23px; margin-left: 2px; position: absolute; background: no-repeat url('http://s.ytimg.com/yts/imgbin/www-hitchhiker-vfl827A2L.webp') -462px -343px; background-color: #f0f0f0; background-size: auto; width: 20px; height: 21px; }");
injectCss(".qnp-button:hover { display: block; margin-top: -23px; margin-left: 2px; position: absolute; background: no-repeat url('http://s.ytimg.com/yts/imgbin/www-hitchhiker-vfl827A2L.webp') -462px -343px; background-color: #f0f0f0; background-size: auto; width: 20px; height: 21px; } .qnp-btn-playlist-delete { background: no-repeat url(http://s.ytimg.com/yts/imgbin/www-hitchhiker-vfl827A2L.webp) -364px -209px; background-size: auto; width: 9px; height: 9px;} .qnp-btn-playlist-minimalize-in { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAANZJREFUOI3NkMttAkEQRKt3uTqPrigMlgPYyYIzEgcfMGA7HqsTsAyIFEAdBhEwvsxKA5pZeU9236pV9foD/HW1pWbXdXOSO1Vt3P0wGkDyC8CDiDyRFHffjQKoKkTkOckpyaYGKQLc/UjyCmCWWo+q2rr7968ACXJQ1SgiMwAQkSKkCkiQfTpn2kNIntz93HuaIUAKSa5jjNdcDwJCCBsA6yy8MbPPmwEjwmsze7v3FX8QQlgB2GatVzN7L3knlQWW2eSVmX3UNq39YAHgEmN8GQr/j/oBz1JSq+CjfRgAAAAASUVORK5CYII=); width: 16px; height: 16px; } ");
injectCss("#qnp-playlist-container .playlist-videos-list { background-color: #222; height: 183px; overflow: auto; } #qnp-playlist-container { width: 480px; height: 200px; position: fixed; bottom: 333px; right: 10px; z-index: 9999; } #qnp-playlist-container .app-bar-playlist-controls { float: right; } #qnp-playlist-container .yt-uix-button-player-controls { padding: 0; margin-left: 0; } #qnp-playlist-container.minimized { height: 61px; bottom: 280px; } #qnp-playlist-container .playlist-videos-list.minimized { display:none; } #qnp-playlist-container .app-bar-playlist-controls-minimize { float: left; width: 25px; line-height: 38px; margin-left: -5px; } ");
injectCss("#qnp-playlist-container .playlist-header { padding: 0 10px; } #qnp-playlist-container .playlist-header-content { font-size: 11px; height: 37px; line-height: 1.5; padding: 15px 5px 8px; } #qnp-playlist-container .playlist-info { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }  #qnp-playlist-container .playlist-title { color: #fff; display: inline; font-size: 15px; font-weight: normal; } #qnp-playlist-container .author-attribution { font-size: 11px; } #qnp-playlist-container .playlist-title a { color: inherit; } #qnp-playlist-container .control-bar { border-top: 1px solid #3a3a3a; }");
injectCss("#qnp-playlist-container .playlist-videos-list>li { overflow: hidden; padding: 10px 10px 10px 0 } #qnp-playlist-container .playlist-videos-list>li .index { font-size: 10px; line-height: 41px; float: left; margin: 0 2px; text-align: center; width: 24px; } #qnp-playlist-container .playlist-video { display: block; height: 41px; position: relative; } #qnp-playlist-container .playlist-video:hover { text-decoration: none; } #qnp-playlist-container .playlist-video .video-thumb { float: left; margin-left: 0; margin-right: 8px; } #qnp-playlist-container .playlist-video-description { overflow: hidden; position: relative; top: -2px; } #qnp-playlist-container .playlist-video h4 { color: #cacaca; font-size: 13px; font-weight: normal; } #qnp-playlist-container .playlist-videos-list .yt-ui-ellipsis { background-color: #222; } #qnp-playlist-container .video-uploader-byline { color: #767676; font-size: 11px; } #qnp-playlist-container.playlist-video .video-thumb { float: left; margin-left: 0; margin-right: 8px; } #qnp-playlist-container .playlist-video a:hover,#qnp-playlist-container .playlist-video a:focus { cursor: pointer; }");
*/

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