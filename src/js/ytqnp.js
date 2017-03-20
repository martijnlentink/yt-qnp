/**
 * Queue 'n Play is an application developed by Circularify
 */

// Define or reference main object
var circularify = circularify || {};

// Add YTSNP object to main
circularify.ytqnp = circularify.ytqnp || (function () {
	var _isInit = false;

	function _initialize(playlistTemplateUrl, plusTemplateUrl, miniTemplateUrl)
	{
		if (_isInit)
			return;
		_isInit = true;

		circularify.utils.wait(function () { return typeof angular !== "undefined" }, function ()
		{
			var qnpMini = document.createElement('qnp-mini');
			document.body.appendChild(qnpMini);
			document.getElementsByTagName("html")[0].setAttribute("ng-app", "app");
			var playlistEl = document.querySelector("#player-playlist");
			if (playlistEl)
				playlistEl.outerHTML = "<qnp-playlist/>";

			var app = angular.module('app', ['dndLists']);

			app.run(["$rootScope", "$compile", function ($rootScope, $compile) {
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
			  		if (window.YTSNPIsCorner) {
			  			circularify.ytapi.getPlayer().cueVideoById(newId);
						circularify.ytapi.getPlayer().playVideo();			  			
			  		}
		  			else
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
			}]);

			app.directive("qnpMini", ["$compile", "$sce", function ($compile, $sce) {
				return {
					templateUrl: $sce.trustAsResourceUrl(miniTemplateUrl),
					restrict: 'E'
				};
			}]);

			app.directive("qnpPlus", ["$compile", "$sce", function ($compile, $sce) {
				return {
					templateUrl: $sce.trustAsResourceUrl(plusTemplateUrl),
					restrict: 'E'
				};
			}]);

			app.directive("qnpPlaylist", ["$compile", "$sce", function ($compile, $sce) {
				return {
					templateUrl: $sce.trustAsResourceUrl(playlistTemplateUrl),
					restrict: 'E'
				};
			}]);

			app.controller('playlist', ["$scope", "$rootScope", "$compile", "$timeout", function($scope, $rootScope, $compile, $timeout) {
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
						var vidElements = parEl.querySelectorAll(".related-list-item:not(.ng-scope),.yt-lockup-video:not(.ng-scope)");
						for(k = 0; k < vidElements.length; k++) {
							var vidEl = vidElements[k];
							var vidThum = vidEl.querySelector(".yt-lockup-thumbnail,.thumb-wrapper");
							if (!vidThum || vidThum.innerHTML.indexOf("qnp-plus") > -1)
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
			}]);

			app.controller('mini-playlist', ["$scope", "$rootScope", "$compile", function ($scope, $rootScope, $compile) {
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
			}]);

			angular.bootstrap(document, ['app']);
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
		upgradePopup: _upgradePopup,
		initialize: _initialize
	};
})();