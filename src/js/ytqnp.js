/**
 * Queue 'n Play is an application developed by Circularify
 */

// Define or reference main object
var circularify = circularify || {};

// Add YTSNP object to main
circularify.ytqnp = circularify.ytqnp || (function () {
	var templ = '<div ng-cloak ng-controller="playlist" id="player-playlist" class="content-alignment watch-player-playlist"><div id="watch-appbar-playlist" class="watch-playlist player-height"> <div class="main-content"> <div class="playlist-header"> <div class="playlist-header-content"> <div class="appbar-playlist-controls clearfix"> </div> <div class="playlist-info"> <h3 class="playlist-title"> <a href="#" class="yt-uix-sessionlink spf-link">Queue &#8216;n Playlist</a> </h3> <ul class="playlist-details"> <li class="author-attribution"> <a href="#" class="yt-uix-sessionlink spf-link">by you</a> </li> <li class="playlist-progress"> <span id="playlist-current-index">1</span><span id="playlist-length">{{videos.length}} videos</span> </li> </ul> </div> </div> <div class="control-bar clearfix"> <div class="playlist-nav-controls"> <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-player-controls yt-uix-button-empty yt-uix-button-has-icon toggle-loop yt-uix-button-opacity yt-uix-tooltip yt-uix-tooltip" type="button" onclick=";return false;" title="Repeat playlist" data-button-toggle="true"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-appbar-autoplay yt-sprite"></span></span></button> <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-player-controls yt-uix-button-empty yt-uix-button-has-icon shuffle-playlist yt-uix-button-opacity yt-uix-tooltip yt-uix-tooltip" type="button" onclick=";return false;" title="Shuffle" data-button-toggle="true"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-appbar-shuffle-video-list yt-sprite"></span></span></button> </div> <div class="playlist-behavior-controls"> <!-- <a href="/watch?v=Qi5PeoL4_r4" class="yt-uix-button hid prev-playlist-list-item yt-uix-button-opacity yt-uix-tooltip yt-uix-tooltip-masked spf-link yt-uix-button-player-controls yt-uix-button-size-default yt-uix-button-has-icon yt-uix-tooltip yt-uix-button-empty" data-shuffle-prev-clicktracking="" data-loop_shuffle-prev-clicktracking="CBQQ0TkiEwjA9urs85_NAhUQxxYKHXRYB8Uo-B0yB2JmX3ByZXZI-Zq8n8KXqfjsAQ" data-normal-prev-clicktracking="" data-loop-prev-clicktracking="CBQQ0TkiEwjA9urs85_NAhUQxxYKHXRYB8Uo-B0yB2JmX3ByZXZI-Zq8n8KXqfjsAQ" title="Previous video"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-appbar-play-prev yt-sprite"></span></span></a> --> <a href="/watch?v={{ videos[0].id }}" class="yt-uix-button hid next-playlist-list-item yt-uix-button-opacity yt-uix-tooltip spf-link yt-uix-button-player-controls yt-uix-button-size-default yt-uix-button-has-icon yt-uix-tooltip yt-uix-button-empty" data-loop_shuffle-next-clicktracking="CBQQ0TkiEwjA9urs85_NAhUQxxYKHXRYB8Uo-B0yB2JmX25leHRI-Zq8n8KXqfjsAQ" data-shuffle-next-clicktracking="CBQQ0TkiEwjA9urs85_NAhUQxxYKHXRYB8Uo-B0yB2JmX25leHRI-Zq8n8KXqfjsAQ" data-normal-next-clicktracking="CBQQ0TkiEwjA9urs85_NAhUQxxYKHXRYB8Uo-B0yB2JmX25leHRI-Zq8n8KXqfjsAQ" data-loop-next-clicktracking="CBQQ0TkiEwjA9urs85_NAhUQxxYKHXRYB8Uo-B0yB2JmX25leHRI-Zq8n8KXqfjsAQ" title="Next video"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-appbar-play-next yt-sprite"></span></span></a> </div> </div> </div> <div class="playlist-videos-container yt-scrollbar-dark yt-scrollbar"> <ol style="top: 70px;" id="playlist-autoscroll-list" class="playlist-videos-list yt-uix-scroller" data-scroll-action="yt.www.watch.lists.loadThumbnails" data-scroller-mousewheel-listener="" data-scroller-scroll-listener="" data-scroller-offset="0"> <li ng-repeat="video in videos" class="yt-uix-scroller-scroll-unit" ng-class="isCurrentVideo(video.id) ? \'currently-playing\' : \'\'"> <a class="yt-uix-button-player-controls" title="Remove item" data-tooltip-text="Remove item" ng-click="remove($index)" style="float: right;"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon qnp-btn-playlist-close yt-sprite"></span></span></a> <span class="index"> {{ isCurrentVideo(video.id) ? \'▶\' : ($index + 1) }} </span> <a href="/watch?v={{ video.id }}" class="yt-uix-sessionlink spf-link playlist-video clearfix spf-link" style="width:95%"> <span class="video-thumb yt-thumb yt-thumb-72"> <span class="yt-thumb-default"> <span class="yt-thumb-clip"> <img width="72" aria-hidden="true" src="https://i.ytimg.com/vi/{{ video.id }}/hqdefault.jpg" alt=""> <span class="vertical-align"></span> </span> </span> </span> <div class="playlist-video-description"> <h4 class="yt-ui-ellipsis yt-ui-ellipsis-2"> {{ video.title }} </h4> <span class="video-uploader-byline"> <span class="" data-ytid="UCf3cbfAXgPFL6OywH7JwOzA">{{ video.author }}</span> </span> </div> </a> </li> </ol> </div> </div> </div>';
	var plus = '<button class="yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-tooltip qnp-button" type="button" role="button" title="Add to queue" data-video-ids="{{ id }}" data-tooltip-text="Add to queue" ng-click="queueVideo(this)" aria-labelledby="yt-uix-tooltip744-arialabel"></button>';
	var smallList = '<div ng-cloak ng-controller="mini-playlist" id="qnp-playlist-container" class="watch-playlist" ng-hide="isHidden" ng-class="{ \'collapsed\': isCollapsed }"> <div class="main-content"> <div class="playlist-header"> <div class="playlist-header-content" data-list-title="Queue \'n Playlist"> <div class="app-bar-playlist-controls"><a class="yt-uix-button-player-controls" title="Close playlist" data-tooltip-text="Close playlist" ng-click="hide()"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon qnp-btn-playlist-close yt-sprite"></span></span></a></div> <div class="app-bar-playlist-controls-collapse"><a class="yt-uix-button-player-controls" title="Collapse" data-tooltip-text="Collapse" data-collapse="false" ng-click="collapse()"><span class="yt-uix-button-icon-wrapper"><span id="qnp-collapser" class="yt-uix-button-icon qnp-btn-playlist-collapse-out yt-sprite"></span></span></a></div> <div class="playlist-info"> <h3 class="playlist-title"> <a class="yt-uix-sessionlink">Queue \'n Playlist</a> <ul class="playlist-details"> <li class="author-attribution">by you</li> </ul> </h3> </div> </div> <div class="control-bar clearfix"></div> </div> <div class="playlist-videos-container yt-scrollbar-dark yt-scrollbar"> <ol ng-class="{ \'collapsed\': isCollapsed }" id="qnp-playlist" class="playlist-videos-list yt-uix-scroller " data-scroller-offset="0" data-scroller-mousewheellistener="" data-scroller-scroll-listener="" data-scroller-mousewheel-listener=""> <li ng-repeat="video in videos" class="yt-uix-scroller-scroll-unit" ng-class="isCurrentVideo(video.id) ? \'currently-playing\' : \'\'"> <a class="yt-uix-button-player-controls" title="Remove item" data-tooltip-text="Remove item" ng-click="remove($index)" style="float: right;"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon qnp-btn-playlist-close yt-sprite"></span></span></a> <span class="index"> {{ isCurrentVideo(video.id) ? \'▶\' : ($index + 1) }} </span> <a href="/watch?v={{ video.id }}" class="yt-uix-sessionlink spf-link playlist-video clearfix spf-link"> <span class="video-thumb yt-thumb yt-thumb-72"> <span class="yt-thumb-default"> <span class="yt-thumb-clip"> <img width="72" aria-hidden="true" src="https://i.ytimg.com/vi/{{ video.id }}/hqdefault.jpg" alt=""> <span class="vertical-align"></span> </span> </span> </span> <div class="playlist-video-description"> <h4 class="yt-ui-ellipsis yt-ui-ellipsis-2"> {{ video.title }} </h4> <span class="video-uploader-byline"> <span class="" data-ytid="UCf3cbfAXgPFL6OywH7JwOzA">{{ video.author }}</span> </span> </div> </a> </li> <li ng-show="videos.length == 0"><span style="padding: 0px 10px;">All dem empty spaces..</span></li> </ol> </div> </div> </div>';

	if (!angular || !angular.bootstrap)
	{
		var script = document.createElement("script");
		script.src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js";
		document.head.appendChild(script);
		var div = document.createElement('div');
		div.innerHTML = smallList;
		document.body.appendChild(div.firstChild);
		document.getElementsByTagName("html")[0].setAttribute("ng-app", "app");
		var playlistEl = document.querySelector("#player-playlist");
		if (playlistEl)
			playlistEl.outerHTML = "<qnp-playlist/>";

		var app = angular.module('app', []);

		app.run(function ($rootScope, $compile) {
			$rootScope.videos = [];
			$rootScope.isInitialized = false;

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

				circularify.omni.qnp.analytics.registerEvent('queue', id, 0, 'qnp');
				$rootScope.videos.push({
			  		title: title,
			  		id: id,
			  		author: by
			  	});
	  		};

		  	$rootScope.dequeue = function () {
		  		if ($rootScope.videos.length == 0 || document.readyState != "complete")
		  			return;

		  		var newId = $rootScope.videos[0].id;
		  		circularify.omni.qnp.analytics.registerEvent('play', newId);
				yt.window.navigate("/watch?v=" + newId);
		  		$rootScope.videos.splice(0, 1);
		  	};

		  	$rootScope.remove = function (idx) {
		  		$rootScope.videos.splice(idx, 1);
		  	};

		  	$rootScope.addPlus = function (element) {
		  		var el = angular.element(element);
		  		var compiled = $compile("<qnp-plus/>")($rootScope);
		  		el.append(compiled);
		  	};
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

		app.controller('playlist', function($scope, $rootScope, $compile) {
			$scope.isCurrentVideo = function (vidId) {
				return vidId == circularify.ytapi.getVideoId();
			};

			if (!$rootScope.isInitialized)
			  circularify.ytapi.getPlayer().addEventListener("onStateChange", function (ev) {
				if (ev != 0)
					return;
					if ($scope.videos.length > 0)
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

			if (!$rootScope.isInitialized)
			window.addEventListener("spfdone", function() {
				initPlusListener();
				var placeholder = angular.element(document.getElementById("placeholder-playlist"));
				var playlistEl = angular.element(document.querySelector("#player-playlist:not(.ng-scope)"));
				var qnpPlaylist = $compile("<qnp-playlist/>")($scope);
				if (playlistEl)
				{
					playlistEl.replaceWith(qnpPlaylist);
				}
				else
				{
					placeholder.className = placeholder.className.replace("hid", '');
					angular.element(placeholder).append(qnpPlaylist);
				}
				if (placeholder)
					placeholder.className = "watch-playlist player-height";
				$scope.$apply();
			});

			var initPlusListener = function () {
				circularify.utils.wait(function () { return document.readyState == "complete" }, function() {
					var btnNext = document.querySelector('.ytp-next-button.ytp-button');
					if (btnNext)
						btnNext.style.display = "none";

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
				});
			};
			initPlusListener();
			$rootScope.isInitialized = true;
		});

		app.controller('mini-playlist', function ($scope, $rootScope, $compile) {
			$scope.isHidden = !window.YTSNPIsCorner;
			$scope.isCollapsed = false;

			$scope.hide = function (shouldHide) {
				if (typeof shouldHide === 'undefined')
					shouldHide = true;
				$scope.isHidden = shouldHide;
			};

			$scope.collapse = function () {
				$scope.isCollapsed = !$scope.isCollapsed;
			}

			window.addEventListener("spfdone", function() { 
				$scope.hide(!window.YTSNPIsCorner);
				$scope.$apply();
			});
		});
	}


	function _upgradePopup(page)
	{
		if (document.getElementById('qnp-upgrade'))
			return;
		
		document.body.innerHTML += "<iframe id='qnp-upgrade' scrolling=\"no\" frameborder=\"0px\" src='" + page + "'>";
	}
	
	// Exposable Object
	return {
		upgradePopup: _upgradePopup
	};
})();