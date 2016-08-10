var templ = '<div ng-cloak ng-controller="playlist" id="player-playlist" class="content-alignment watch-player-playlist"><div id="watch-appbar-playlist" class="watch-playlist player-height"> <div class="main-content"> <div class="playlist-header"> <div class="playlist-header-content"> <div class="appbar-playlist-controls clearfix"> </div> <div class="playlist-info"> <h3 class="playlist-title"> <a href="#" class="yt-uix-sessionlink spf-link">Queue &#8216;n Playlist</a> </h3> <ul class="playlist-details"> <li class="author-attribution"> <a href="#" class="yt-uix-sessionlink spf-link">by you</a> </li> <li class="playlist-progress"> <span id="playlist-current-index">1</span><span id="playlist-length">66 videos</span> </li> </ul> </div> </div> <div class="control-bar clearfix"> <div class="playlist-nav-controls"> <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-player-controls yt-uix-button-empty yt-uix-button-has-icon toggle-loop yt-uix-button-opacity yt-uix-tooltip yt-uix-tooltip" type="button" onclick=";return false;" title="Repeat playlist" data-button-toggle="true"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-appbar-autoplay yt-sprite"></span></span></button> <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-player-controls yt-uix-button-empty yt-uix-button-has-icon shuffle-playlist yt-uix-button-opacity yt-uix-tooltip yt-uix-tooltip" type="button" onclick=";return false;" title="Shuffle" data-button-toggle="true"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-appbar-shuffle-video-list yt-sprite"></span></span></button> </div> <div class="playlist-behavior-controls"> <!-- <a href="/watch?v=Qi5PeoL4_r4" class="yt-uix-button hid prev-playlist-list-item yt-uix-button-opacity yt-uix-tooltip yt-uix-tooltip-masked spf-link yt-uix-button-player-controls yt-uix-button-size-default yt-uix-button-has-icon yt-uix-tooltip yt-uix-button-empty" data-shuffle-prev-clicktracking="" data-loop_shuffle-prev-clicktracking="CBQQ0TkiEwjA9urs85_NAhUQxxYKHXRYB8Uo-B0yB2JmX3ByZXZI-Zq8n8KXqfjsAQ" data-normal-prev-clicktracking="" data-loop-prev-clicktracking="CBQQ0TkiEwjA9urs85_NAhUQxxYKHXRYB8Uo-B0yB2JmX3ByZXZI-Zq8n8KXqfjsAQ" title="Previous video"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-appbar-play-prev yt-sprite"></span></span></a> --> <a href="/watch?v={{ videos[0].id }}" class="yt-uix-button hid next-playlist-list-item yt-uix-button-opacity yt-uix-tooltip spf-link yt-uix-button-player-controls yt-uix-button-size-default yt-uix-button-has-icon yt-uix-tooltip yt-uix-button-empty" data-loop_shuffle-next-clicktracking="CBQQ0TkiEwjA9urs85_NAhUQxxYKHXRYB8Uo-B0yB2JmX25leHRI-Zq8n8KXqfjsAQ" data-shuffle-next-clicktracking="CBQQ0TkiEwjA9urs85_NAhUQxxYKHXRYB8Uo-B0yB2JmX25leHRI-Zq8n8KXqfjsAQ" data-normal-next-clicktracking="CBQQ0TkiEwjA9urs85_NAhUQxxYKHXRYB8Uo-B0yB2JmX25leHRI-Zq8n8KXqfjsAQ" data-loop-next-clicktracking="CBQQ0TkiEwjA9urs85_NAhUQxxYKHXRYB8Uo-B0yB2JmX25leHRI-Zq8n8KXqfjsAQ" title="Next video"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-appbar-play-next yt-sprite"></span></span></a> </div> </div> </div> <div class="playlist-videos-container yt-scrollbar-dark yt-scrollbar"> <ol id="playlist-autoscroll-list" class="playlist-videos-list yt-uix-scroller" data-scroll-action="yt.www.watch.lists.loadThumbnails" data-scroller-mousewheel-listener="" data-scroller-scroll-listener="" data-scroller-offset="0"> <li ng-repeat="video in videos" class="yt-uix-scroller-scroll-unit" ng-class="isCurrentVideo(video.id) ? \'currently-playing\' : \'\'"> <span class="index"> {{ isCurrentVideo(video.id) ? \'▶\' : ($index + 1) }} </span> <a href="/watch?v={{ video.id }}" class="yt-uix-sessionlink spf-link playlist-video clearfix spf-link"> <span class="video-thumb yt-thumb yt-thumb-72"> <span class="yt-thumb-default"> <span class="yt-thumb-clip"> <img width="72" aria-hidden="true" src="https://i.ytimg.com/vi/{{ video.id }}/hqdefault.jpg" alt=""> <span class="vertical-align"></span> </span> </span> </span> <div class="playlist-video-description"> <h4 class="yt-ui-ellipsis yt-ui-ellipsis-2"> {{ video.title }} </h4> <span class="video-uploader-byline"> <span class="" data-ytid="UCf3cbfAXgPFL6OywH7JwOzA">{{ video.author }}</span> </span> </div> </a> </li> </ol> </div> </div> </div>';
var plus = '<button class="yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-tooltip qnp-button" type="button" role="button" title="Add to queue" data-video-ids="{{ id }}" data-tooltip-text="Add to queue" ng-click="queueVideo(this)" aria-labelledby="yt-uix-tooltip744-arialabel"></button>';
var smallList = '<div ng-cloak ng-controller="mini-playlist" id="qnp-playlist-container" class="watch-playlist" ng-hide="isHidden" ng-class="isCollapsed ? \'collapsed\' : \'\'"> <div class="main-content"> <div class="playlist-header"> <div class="playlist-header-content" data-list-title="Queue \'n Playlist"> <div class="app-bar-playlist-controls"><a class="yt-uix-button-player-controls" title="Close playlist" data-tooltip-text="Close playlist" ng-click="hide()"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon qnp-btn-playlist-close yt-sprite"></span></span></a></div> <div class="app-bar-playlist-controls-collapse"><a class="yt-uix-button-player-controls" title="Collapse" data-tooltip-text="Collapse" data-collapse="false" ng-click="collapse()"><span class="yt-uix-button-icon-wrapper"><span id="qnp-collapser" class="yt-uix-button-icon qnp-btn-playlist-collapse-out yt-sprite"></span></span></a></div> <div class="playlist-info"> <h3 class="playlist-title"> <a class="yt-uix-sessionlink">Queue \'n Playlist</a> <ul class="playlist-details"> <li class="author-attribution">by you</li> </ul> </h3> </div> </div> <div class="control-bar clearfix"></div> </div> <div class="playlist-videos-container yt-scrollbar-dark yt-scrollbar"> <ol "isCollapsed ? \'collapsed\' : \'\'" id="qnp-playlist" class="playlist-videos-list yt-uix-scroller " data-scroller-offset="0" data-scroller-mousewheellistener="" data-scroller-scroll-listener="" data-scroller-mousewheel-listener=""> <li ng-repeat="video in videos" class="yt-uix-scroller-scroll-unit" ng-class="isCurrentVideo(video.id) ? \'currently-playing\' : \'\'"> <span class="index"> {{ isCurrentVideo(video.id) ? \'▶\' : ($index + 1) }} </span> <a href="/watch?v={{ video.id }}" class="yt-uix-sessionlink spf-link playlist-video clearfix spf-link"> <span class="video-thumb yt-thumb yt-thumb-72"> <span class="yt-thumb-default"> <span class="yt-thumb-clip"> <img width="72" aria-hidden="true" src="https://i.ytimg.com/vi/{{ video.id }}/hqdefault.jpg" alt=""> <span class="vertical-align"></span> </span> </span> </span> <div class="playlist-video-description"> <h4 class="yt-ui-ellipsis yt-ui-ellipsis-2"> {{ video.title }} </h4> <span class="video-uploader-byline"> <span class="" data-ytid="UCf3cbfAXgPFL6OywH7JwOzA">{{ video.author }}</span> </span> </div> </a> </li> <li ng-show="videos.length == 0"><span style="padding: 0px 10px;">All dem empty spaces..</span></li> </ol> </div> </div> </div>';


function TryAngular()
{
	if (angular && angular.bootstrap)
		return;
	var script = document.createElement("script");
	script.src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js";
	document.head.appendChild(script);
	var div = document.createElement('div');
	div.innerHTML = smallList;
	document.body.appendChild(div.firstChild);
	document.getElementsByTagName("html")[0].setAttribute("ng-app", "app");
	//document.body.setAttribute("ng-controller", "main");

	var app = angular.module('app', []);
	app.run(function ($rootScope, $compile) {
		$rootScope.videos = [];

		$rootScope.queueVideo = function(el) {
			var el = event.target;
			while (el.tagName != "LI")
				el = el.parentNode;

			var by = el.querySelector(".g-hovercard").innerHTML;
			var id = null;
			var idEl = el.querySelector("[data-video-ids]");
			if (idEl)
				id = idEl.getAttribute("data-video-ids");
			if (!id && (idEl = el.querySelector("[data-vid]")))
				id = idEl.getAttribute("data-vid");
			if (!id)
				return;
			var title = el.querySelector("a[href^='/watch?v='][title]").getAttribute("title");

			$rootScope.videos.push({
		  		title: title,
		  		id: id,
		  		author: by
		  	});
	  	};

	  	$rootScope.dequeue = function () {
	  		if ($rootScope.videos.length == 0)
	  			return;
			yt.window.navigate("/watch?v="+$rootScope.videos[0].id);
	  		$rootScope.videos.splice(0, 1);
	  	};

	  	$rootScope.addPlus = function (element) {
	  		var el = angular.element(element);
	  		var compiled = $compile("<qnp-plus/>")($rootScope);
	  		el.append(compiled);
	  	};
	});

	app.factory("kjoe", function($compile) {
		var service = {};

		service.queue = function (video) {
			videos = window.YTQNPQueue || [];
			videos.push(video);
			window.YTQNPQueue = videos;
			angular.element(document.querySelector("[ng-controller='mini-playlist']")).scope().$apply();
		};

		service.getVideos = function () {
			return window.YTQNPQueue;
		};

		return service;
	});

	app.directive("qnpPlus", function ($compile) {
		return {
			template: plus,
			restrict: 'E'
		};
	});

	app.directive("qnpPlaylist", function ($compile) {
		return {
			template: templ,
			restrict: 'E'
		};
	});

	app.controller('playlist', function($scope, $rootScope, $compile, kjoe) {
	  $scope.isCurrentVideo = function (vidId) {
	  	return vidId == circularify.ytapi.getVideoId();
	  };

	  circularify.ytapi.getPlayer().addEventListener("onStateChange", function (ev) {
		if (ev != 0)
			return;
			var videos = $scope.videos;
			if (videos.length > 0)
				$scope.$apply($scope.dequeue);
		});

	  $scope.createPlus = function (parEl) {
			parEl.setAttribute("data-qnp-processed", "true");
			var vidElements = parEl.querySelectorAll(".related-list-item:not(.ng-scope),.yt-lockup-video:not(.ng-scope)");
			for(k = 0; k < vidElements.length; k++) {
				var vidEl = vidElements[k];
				var vidThum = vidEl.querySelector(".yt-lockup-thumbnail,.thumb-wrapper");
				if (!vidThum)
					continue;
				$rootScope.addPlus(vidThum);
			}
		};

	window.addEventListener("spfdone", function() {
		initPlusListener();
		// var playlistEl = document.querySelector("#player-playlist:not(.ng-scope)");
		// if (!playlistEl)
		// 	return;
		// playlistEl.outerHTML = "<qnp-playlist/>";
		var placeholder = angular.element(document.getElementById("placeholder-playlist"));
		var playlistEl = angular.element(document.querySelector("#player-playlist:not(.ng-scope)"));
		var qnpPlaylist = $compile("<qnp-playlist/>")($scope);
		if (playlistEl)
		{
			playlistEl.replaceWith(qnpPlaylist);
			// playlistEl.parentNode.insertBefore(qnpPlaylist, playlistEl);
			// playlistEl.parentNode.removeChild(playlistEl);
		}
		else
		{
			placeholder.className = placeholder.className.replace("hid", '');
			angular.element(placeholder).append(qnpPlaylist);
			//placeholder.innerHTML += "<qnp-playlist/>";
		}
		circularify.utils.wait(function () { return document.readyState == "complete" }, function() { nxt(); });
		$scope.$apply();
	});

		var initPlusListener = function () {
	  circularify.utils.wait(function () { return document.readyState == "complete" }, function() {
			var cont = document.getElementById("body-container");
			var observer = new MutationObserver(function (mutations) {
				for(var i=0; i<mutations.length; ++i) {
					//yt-lockup-thumbnail
			        // look through all added nodes of this mutation
			        for(var j=0; j<mutations[i].addedNodes.length; ++j) {
			        	if ( (mutations[i].addedNodes[j].innerHTML || "").indexOf("yt-lockup-video") > -1) {
			        		$scope.$apply($scope.createPlus(mutations[i].addedNodes[j]));
			        	}
			        }
			    }
			});
			observer.observe(cont, { subtree: true, childList: true });
			$scope.$apply($scope.createPlus(document.body));
		}); };
	  initPlusListener();
	});
	app.controller('mini-playlist', function ($scope, $compile, kjoe) {
		$scope.isHidden = !window.YTSNPIsCorner;
		$scope.isCollapsed = false;

		$scope.hide = function (shouldHide) {
			if (typeof shouldHide === 'undefined')
				shouldHide = true;
			$scope.isHidden = shouldHide;
		};

		$scope.collapse = function () {
			$scope.isCollapsed = true;
		}

		window.addEventListener("spfdone", function() { 
			$scope.hide(!window.YTSNPIsCorner);
			$scope.$apply();
		});

	});

	nxt();
}

function nxt() {
	var placeholder = document.getElementById("placeholder-playlist");
	var playlistEl = document.querySelector("#player-playlist:not(.ng-scope)");
	if (playlistEl)
		playlistEl.outerHTML = templ;
	else
	{
		placeholder.className = placeholder.className.replace("hid", '');
		placeholder.innerHTML += templ;
	}
	if (placeholder)
	{
		placeholder.className = "watch-playlist player-height";
		placeholder.style.display = "auto";	
		var playlistElGetSet = Object.getOwnPropertyDescriptor(placeholder, 'innerHTML');
		if (!playlistElGetSet)
		{
			// YouTube likes to set the innerHTML of the playlist to an empty string.
			// If we allow that every page navigation we need to refresh reinit the playlist with angular
			// Which is way too slow. With a custom get/set we can check if the string to set is empty
			placeholder.__defineGetter__(
			    'innerHTML',
			    function(){
			      var outer = this.outerHTML;
			      return outer.substr(outer.indexOf(">") + 1, outer.lastIndexOf("</") - outer.indexOf(">") - 1);
			    }
			  );
			  
			  placeholder.__defineSetter__("innerHTML", function (html) {
			  	if (html == '')
			    	return;
			      
			      var start = this.outerHTML.substr(0, this.outerHTML.indexOf(">") + 1);
			      var end = this.outerHTML.substr(this.outerHTML.lastIndexOf("</"), this.outerHTML.length - this.outerHTML.lastIndexOf("</"));
			      this.outerHTML = start + html + end;
			  });
		}
	}
	// circularify.utils.wait(function () { return document.readyState == "complete" }, function () {
			// angular.bootstrap(document.querySelectorAll("[ng-controller]:not(.ng-scope)"), ["app"]);
	// 	});	

	// circularify.utils.wait(function () { return document.querySelector(".related-list-item") && angular && angular.bootstrap; }, function() {
	// 	var lockups = document.querySelectorAll(".related-list-item:not(.ng-scope),.yt-lockup-video:not(.ng-scope)");
	// 	for (var i = lockups.length - 1; i >= 0; i--) {
	// 		lockups[i].setAttribute("ng-controller", "video-teaser");
	// 		lockups[i].innerHTML += plus;
	// 	};
		
	// 	angular.bootstrap(document.querySelectorAll("[ng-controller]:not(.ng-scope)"), ["app"]);
	// });
}



TryAngular();

/*
 * Queue 'n Play is an application developed by Circularify
 */

// YTQNP Object
function ytqnp() {
	
	// Contains all the queued videos
	var _playlist  = [];

	function _getPostionOnPage(element)
	{
		if (!element)
			return;

		var rect = element.getBoundingClientRect();

		return {
			left: rect.left + window.scrollX,
			top: rect.top + window.scrollY,
			right: rect.left + rect.width + window.scrollX,
			bottom: rect.top + rect.height + window.scrollY,
			width: rect.width,
			height: rect.height
		};
	}
		
	// Navigating function for QNP
	function _navigating(url) 
	{
		url = url || document.location.href;

		// nxt();

		if(window.YTSNPIsCorner)
		{
			// Add the buttons
			_insertQueueButtons();
	// return;
			_createPlaylistUI();
			_hidePlayerButtons(true);
		}
		else 
		{
			// Remove the buttons
			// _hideQueueButtons();
			_hidePlayerButtons(false);
		}
	}
	
	// Change behavior of the Play Next button from YouTube
	function _hidePlayerButtons(hideOn)
	{
		// Reference the playNext button
		var btnNext = document.querySelector('.ytp-next-button.ytp-button');
		
		if (btnNext) {
			// If it needs to be hidden, do so.
			if(hideOn)
				btnNext.setAttribute('style', 'display: none');
			else
				btnNext.removeAttribute('style');
		}
	}
	
	// Insert the Queue buttons
	function _insertQueueButtons()
	{return;
		// Get all search results
		var videoItems = document.querySelectorAll('.yt-lockup-thumbnail');
		
		// Loop through the items and add their respective buttons
		for(var b = 0; b < videoItems.length; b++)
		{
			// Skip playlist and channel
			if(videoItems[b].className.indexOf("yt-pl-thumb") == -1 
				&& videoItems[b].parentElement.className.indexOf("yt-lockup-channel") == -1
				&& videoItems[b].parentElement.querySelector(".standalone-ypc-badge-renderer") == null)
			{
		
				// Get the video ID for the current item in the results
				var vIdBtn = videoItems[b].querySelector('button[class*="addto-watch-later-button"]');
				if(vIdBtn != undefined)
				{
					var videoId = vIdBtn.getAttribute('data-video-ids');
					
					// Only add the button if it does not exist yet.
					if(videoItems[b].querySelectorAll('.qnp-btn-' + videoId).length == 0)
					{
						var videoTitle;
						var videoAut;
						
						// Depending on what page is loaded, we need to get a different element
						if(window.location.href.indexOf('results?search_query') > -1)
							videoTitle = videoItems[b].parentElement.querySelector('.yt-uix-sessionlink.yt-uix-tile-link').innerHTML;
						else						
							videoTitle = videoItems[b].parentElement.querySelectorAll('.yt-uix-sessionlink')[1].innerHTML;
						
						videoTitle = circularify.utils.htmlEscape(videoTitle);
						
						// Depending on what page is loaded, we need to get a different element
						if(window.location.href.indexOf('channel') > -1)
							videoAut = document.querySelector('.spf-link.branded-page-header-title-link.yt-uix-sessionlink').innerHTML;
						else
							videoAut = videoItems[b].parentElement.querySelector('.g-hovercard').innerHTML;
						
						videoAut = circularify.utils.htmlEscape(videoAut);
						
						// Create the button and add the required attributes
						var button = document.createElement('button');
						button.className = "yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-tooltip qnp-button qnp-btn-" + videoId;
						button.setAttribute('type', 'button');
						button.setAttribute('role', 'button');
						button.setAttribute('title', 'Add to queue');
						button.setAttribute('data-video-ids', videoId); // This is the video to play
						button.setAttribute('data-tooltip-text', 'Add to queue');
						button.setAttribute('onclick', "circularify.ytqnp.queue('" + videoId + "','" + videoTitle + "','" + videoAut + "')");
						button.setAttribute('ng-click', "queue('" + videoId + "','" + videoTitle + "','" + videoAut + "')");
						// Add the button
						videoItems[b].appendChild(button);
					}
				}
			}
		}
	}
	
	// Hide the buttons when navigating to another page
	function _hideQueueButtons()
	{
		// Get all search results
		var qnpButtons = document.querySelectorAll('.qnp-button');
		
		// Only hide the buttons if there actually are buttons
		if(qnpButtons.length > 0)
		{
			// Loop through the buttons
			for(var b = 0; b < qnpButtons.length-1; b++)
			{
				// Remove the buttons
				qnpButtons[b].parentElement.removeChild(this[b]);
			}
		}		
	}
	
	// Create the UI for the playlist
	function _createPlaylistUI()
	{
		return;
		// It should only show when SnP is cornerized
		if(window.YTSNPIsCorner)
		{			
			var playlistq = document.querySelectorAll('#qnp-playlist-container');
			
			// Only add the playlist when it's not yet on the page
			if(playlistq.length == 0)
			{
				// Playlist container
				var plst = document.createElement('div');
				plst.id = "qnp-playlist-container";
				plst.className = "watch-playlist collapsed";
			
				// Main Content
				var cnt = document.createElement('div');
				cnt.className = "main-content";
			
				// Playlist header
				var divH = document.createElement('div');
				divH.className = "playlist-header";
				
					var hcnt = document.createElement('div');
					hcnt.className = "playlist-header-content";
					hcnt.setAttribute('data-list-title', "Queue 'n Playlist");
					
					var btnAreaOne = document.createElement('div');
					btnAreaOne.className = "app-bar-playlist-controls-collapse";
					
						var mBtn = document.createElement('a');
						mBtn.className = "yt-uix-button-player-controls";
						mBtn.setAttribute('title', 'Collapse');
						mBtn.setAttribute('data-tooltip-text', 'Collapse');
						mBtn.setAttribute('data-collapse', 'true');
						mBtn.setAttribute('onclick', 'circularify.ytqnp.collapse()');
						
							var smWrap = document.createElement('span');
							smWrap.className = "yt-uix-button-icon-wrapper";
							
							var smIcon = document.createElement('span');
							smIcon.id = "qnp-collapser";
							smIcon.className = "yt-uix-button-icon qnp-btn-playlist-collapse-in yt-sprite";
					
					
					var btnAreaTwo = document.createElement('div');
					btnAreaTwo.className = "app-bar-playlist-controls";
					
						var aBtn = document.createElement('a');
						aBtn.className = "yt-uix-button-player-controls";
						aBtn.setAttribute('title', 'Close playlist');
						aBtn.setAttribute('data-tooltip-text', 'Close playlist');
						aBtn.setAttribute('onclick', 'circularify.ytqnp.close()');
						
							var sWrap = document.createElement('span');
							sWrap.className = "yt-uix-button-icon-wrapper";
							
							var sIcon = document.createElement('span');
							sIcon.className = "yt-uix-button-icon qnp-btn-playlist-close yt-sprite";
						
					
					// Info element
					var info = document.createElement('div');
					info.className = "playlist-info";
					
						// Info header
						var h3 = document.createElement('h3');
						h3.className = "playlist-title";
						
						var h3a = document.createElement('a');
						h3a.className = "yt-uix-sessionlink";
						h3a.innerHTML = "Queue 'n Playlist";
					
						// Details
						var det = document.createElement('ul');
						det.className = "playlist-details";
			
							var la = document.createElement('li');
							la.className = "author-attribution";
							la.innerHTML = "by you";
					
					// Clearfix					
					var hcfx = document.createElement('div');
					hcfx.className = "control-bar clearfix";
			
				// Create the container div
				var divC = document.createElement('div');
				divC.className = "playlist-videos-container yt-scrollbar-dark yt-scrollbar"

				// Create the playlist
				var ol = document.createElement('ol');
				ol.id = "qnp-playlist";
				ol.className = "playlist-videos-list yt-uix-scroller collapsed";
				ol.setAttribute('data-scroller-offset', '0');
				ol.setAttribute('data-scroller-mousewheellistener', '');
				ol.setAttribute('data-scroller-scroll-listener', '');
				//ol.setAttribute('ondrop', 'qnpDrop(event)');
				//ol.setAttribute('ondragover', 'qnpAllow(event)');
				
				ol.addEventListener('dragover', qnpAllow);
				ol.addEventListener('dragenter', qnpAllow);
				ol.addEventListener('drop', qnpDrop);

				// Wrap up the info header
				h3.appendChild(h3a);
				det.appendChild(la);
				h3.appendChild(det);
				info.appendChild(h3);				
				sWrap.appendChild(sIcon);
				aBtn.appendChild(sWrap);
				btnAreaTwo.appendChild(aBtn);
				hcnt.appendChild(btnAreaTwo);
				smWrap.appendChild(smIcon);
				mBtn.appendChild(smWrap);
				btnAreaOne.appendChild(mBtn);
				hcnt.appendChild(btnAreaOne);
				hcnt.appendChild(info);
				divH.appendChild(hcnt);
				divH.appendChild(hcfx);
				
				// Add the playlist elements
				cnt.appendChild(divH);
				divC.appendChild(ol);	
				cnt.appendChild(divC);
				
				// Add to container
				plst.appendChild(cnt);
				
				// Add the playlist
				document.body.appendChild(plst);
				
				if(_playlist.length > 0)
				{
					// Update the visible playlist
					_updatePlaylist();
				} else 
				{
					// If the playlist is empty, show a message.
					var playlist = document.querySelector('#qnp-playlist');
					var li = document.createElement('li');
					var span = document.createElement('span');
					span.style.padding = "0 10px";
					span.innerHTML = "All dem empty spaces..";
					li.appendChild(span);
					playlist.appendChild(li);
				}
			} 
		}
	}
	
	// Hide the playlist
	function _hidePlaylistUI()
	{
		// Reference the playlist container
		var plst = document.querySelectorAll('#qnp-playlist-container');
		
		// If the player exists
		if(plst.length == 1)
		{
			// hide the playlist
			plst[0].style.display = 'none';
		}
	}

	function _toggleClass(el, className) {
		if (el.className.indexOf(className) > -1)
			el.className = el.className.replace(className, '');
		else
			el.className += " " + className;
	}
	
	// Collapse playlist
	function _collapsePlaylist()
	{
		var collapse = document.querySelector('a[data-collapse]');
		var isCollapsed = collapse.getAttribute('data-collapse');
		var newCollapseState = "";
		
		// If the player is collapsed, open it
		if(isCollapsed == "true")
		{	
			// open the list
			var pc = document.querySelector('#qnp-playlist-container');
			_toggleClass(pc, 'collapsed');
			var pl = document.querySelector("#qnp-playlist");
			_toggleClass(pl, 'collapsed');
			
			// Set the icon
			document.querySelector('#qnp-collapser').className = "yt-uix-button-icon qnp-btn-playlist-collapse-out yt-sprite";
			newCollapseState = "false";
		}
		else
		{
			// Close it
			var pc = document.querySelector('#qnp-playlist-container');
			_toggleClass(pc, 'collapsed');
			var pl = document.querySelector("#qnp-playlist");
			_toggleClass(pl, 'collapsed');
			
			// Set the icon
			document.querySelector('#qnp-collapser').className = "yt-uix-button-icon qnp-btn-playlist-collapse-in yt-sprite";		
			newCollapseState = "true";
		}
		
		// Set the state
		collapse.setAttribute('data-collapse', newCollapseState);
	}
	
	// Update the visual playlist
	function _updatePlaylist()
	{		
		// Empty the playlist UI
		var qnpNode = document.querySelector('#qnp-playlist');
		if (!qnpNode)
			return;
		
		while (qnpNode.firstChild) {
			qnpNode.removeChild(qnpNode.firstChild);
		}
		
		// If the playlist is empty, tell the user so.
		if(_playlist.length == 0)
		{	
			var li = document.createElement('li');
			var span = document.createElement('span');
			span.style.padding = "0 10px";
			span.innerHTML = "There is nothing here..";
			li.appendChild(span);
			qnpNode.appendChild(li);
		} 
		else
		{		
		
			// Remove the minimize state
			var pc = document.querySelector('#qnp-playlist-container');
			pc.className += " watch-player-playlist watch-playlist"; 
			var pl = document.querySelector("#qnp-playlist");
			pl.className = "playlist-videos-list yt-uix-scroller";
			document.querySelector('a[data-collapse]').setAttribute('data-collapse', 'false');
			document.querySelector('#qnp-collapser').className = 'yt-uix-button-icon qnp-btn-playlist-collapse-out yt-sprite';
			
			// Loop through the items in the playlist
			for(var v = 0; v < _playlist.length; v++)
			{
				// Reference the current video
				var current = _playlist[v];
				
				var li = document.createElement("li");
				li.className = "yt-uix-scroller-scroll-unit";
				li.setAttribute('data-video-title', current.title);
				li.setAttribute('data-video-id', current.id);
				li.setAttribute('data-index', v);
				li.setAttribute('draggable', 'true');
				li.setAttribute('ondragstart', 'qnpDrag(event)');
				
				var eIndex = document.createElement('span');
				eIndex.className = "index";
				eIndex.innerHTML = v + 1;
				
				var eClose = document.createElement('a');
				eClose.className = 'qnp-li-remove';
				eClose.setAttribute('title' , 'Remove from playlist');
				eClose.setAttribute('data-tooltip-text' , 'Remove from playlist');
				eClose.setAttribute('onclick', 'circularify.ytqnp.remove(' + v + ')');
				
					var eCIcon = document.createElement('span');
					eCIcon.className = "yt-uix-button-icon qnp-btn-playlist-close yt-sprite";
				
				var eLink = document.createElement('a');
				eLink.className = "yt-uix-sessionlink spf-link playlist-video clearfix spf-link";
				
				var eThumb = document.createElement('span');
				eThumb.className = "video-thumb yt-thumb yt-thumb-72";
				var eThumbDef = document.createElement('span');
				eThumbDef.className = "yt-thumb-default";
				var eThumbClip = document.createElement('span');
				eThumbClip.className = "yt-thumb-clip";
				var img = document.createElement('img');
				img.setAttribute('src', 'https://i.ytimg.com/vi/' + current.id + '/default.jpg');
				img.setAttribute('width', '72');
				var spacer = document.createElement('span');
				spacer.className = 'vertical-align';
				
				// Wrap up the link tag
				eThumbClip.appendChild(img);
				eThumbClip.appendChild(spacer);
				eThumbDef.appendChild(eThumbClip);
				eThumb.appendChild(eThumbDef);
				eLink.appendChild(eThumb);
				
				var eDesc = document.createElement('div');
				eDesc.className = "playlist-video-description";
				
				var title = document.createElement('h4');
				title.className = "yt-ui-ellipsis yt-ui-ellipsis-2";
				title.innerHTML = circularify.utils.htmlUnescape(current.title);
				var uploader = document.createElement('span');
				uploader.className = "video-uploader-byline";
				var uplsub = document.createElement('span');
				uplsub.innerHTML = "by <strong>" + circularify.utils.htmlUnescape(current.by) + "</strong>";
				
				// Wrap up Description
				eDesc.appendChild(title);
				uploader.appendChild(uplsub);
				eDesc.appendChild(uploader);
				eLink.appendChild(eDesc);
				
				// Wrap up close
				eClose.appendChild(eCIcon);
				
				// Add all the elements
				li.appendChild(eIndex);
				li.appendChild(eClose);
				li.appendChild(eLink);
				
				// Add the item to the playlist
				qnpNode.appendChild(li);
			}
		}
	}
	
	// Queue a new video
	function _queueVideo(id, title, by)
	{
		// Only queue when there is an object with values
		if(id && title && by)
		{
			_playlist.push({
				id: id,
				title: title,
				by: by
			});
			_updatePlaylist();
		
			// GA
			if(window.yttqrcooldown == 0) {
				circularify.omni.qnp.analytics.registerEvent('queue', id, 0, 'qnp');
				window.yttrcooldown = 1;
				setTimeout(function() {
					window.yttqrcooldown = 0;
					circularify.debug.info('-queue sent');
				}, 1500);
			}
		}
	}
	
	// Remove a video by index
	function _removeVideo(index)
	{	
		_playlist.splice(index, 1);
		_updatePlaylist();
	}
	
	// Dequeue and return the first video
	function _dequeueVideo()
	{
		// Get the next video and update the playlist
		var next = _playlist.shift();
		_updatePlaylist();
		
		return next;
	}
	
	var _prevEvent = -1;
	// Play the next video
	function _playNext(event)
	{		
		//if(window.YTSNPIsCorner)
		{		
			// When the player has finished playing
			// Only queue a video when there are videos queued
			if(event == 0 && _playlist.length > 0 && _prevEvent != 0) 
			{	
				circularify.debug.log("Play next");		
				// Reference the player api
				var player = circularify.ytapi.getPlayer();
				
				// Get the first video ID
				var newId = _dequeueVideo().id;
				
				// Queue the video and start playing
				player.cueVideoById(newId);
				
				setTimeout(function() {
					player.playVideo();
					clearTimeout(this);
				}, 1000);
									
				// GA
				if(window.yttqrcooldown == 0) {
					circularify.omni.qnp.analytics.registerEvent('play', newId);
					window.yttrcooldown = 1;
					setTimeout(function() {
						window.yttqrcooldown = 0;
						circularify.debug.info('--playnext sent');
					}, 1500);
				}
			}
			_prevEvent = event;
		}
	}
	
	function _playNextForce()
	{
		if(window.YTSNPIsCorner)
		{		
			// Only queue a video when there are videos queued
			if(_playlist.length > 0)
			{
				// Reference the player api
				var player = circularify.ytapi.getPlayer();
				
				// Get the first video ID
				var newId = _dequeueVideo().id;
				
				// Queue the video and start playing
				player.cueVideoById(newId);

				player.playVideo();
			
				// GA
				if(window.yttqrcooldown == 0) {
					circularify.omni.qnp.analytics.registerEvent('next', newId);
					window.yttrcooldown = 1;
					setTimeout(function() {
						window.yttqrcooldown = 0;
						circularify.debug.info('--playnext sent');
					}, 1500);
				}
			}
		}
	}
	
	// Reorder an item from position to another
	function _reorder(fro, to)
	{
		// Only work when parameters aren't empty, and when
		// 	from and to aren't the same.
		if(fro != "" && to != "" && fro !== to)
		{
			circularify.utils.arrayMoveItem(_playlist, fro, to);
			_updatePlaylist();
		}
	}

	function _upgradePopup(page)
	{
		if (document.getElementById('qnp-upgrade'))
			return;
		
		document.body.innerHTML += "<iframe id='qnp-upgrade' scrolling=\"no\" frameborder=\"0px\" src='" + page + "'>";
	}
	
	// Exposable Object
	return {
		playlist: _playlist,
		queue: _queueVideo,
		dequeue: _dequeueVideo,
		remove: _removeVideo,
		next: _playNext,
		nextForce: _playNextForce,
		reorder: _reorder,
		navigating: _navigating,
		collapse: _collapsePlaylist,
		close: _hidePlaylistUI,
		upgradePopup: _upgradePopup
	}
};

// Define or reference main object
var circularify = circularify || {};

// Add YTSNP object to main
circularify.ytqnp = circularify.ytqnp || ytqnp();