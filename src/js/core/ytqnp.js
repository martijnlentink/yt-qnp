/*
 * Queue 'n Play is an application developed by Circularify
 */

// YTQNP Object
function ytqnp() {
	
	// Contains all the queued videos
	var _playlist  = [];
		
	// Navigating function for QNP
	function _navigating() 
	{
		if(window.YTSNPIsCorner)
		{
			// Add the buttons
			_insertQueueButtons();
			_createPlaylistUI();
		} else 
		{
			// Remove the buttons
			_hideQueueButtons();
			_hidePlaylistUI();
		}
	}
	
	// Insert the Queue buttons
	function _insertQueueButtons()
	{
		// Get all search results
		var videoItems = document.querySelectorAll('.yt-lockup-thumbnail');
		
		// Loop through the items and add their respective buttons
		for(var b = 0; b < videoItems.length-1; b++)
		{
			// Get the video ID for the current item in the results
			var vIdBtn = videoItems[b].querySelectorAll('.addto-watch-later-button')[0];
			var videoId = vIdBtn.getAttribute('data-video-ids');
			
			// Only add the button if it does not exist yet.
			if(videoItems[b].querySelectorAll('.qnp-btn-' + videoId).length == 0)
			{
				var videoTitle = videoItems[b].parentElement.querySelectorAll('.yt-uix-sessionlink.yt-uix-tile-link')[0].text
				var videoAut = videoItems[b].parentElement.querySelectorAll('.g-hovercard')[0].innerHTML
				
				// Create the button and add the required attributes
				var button = document.createElement('button');
				button.className = "yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-tooltip qnp-button qnp-btn-" + videoId;
				button.setAttribute('type', 'button');
				button.setAttribute('role', 'button');
				button.setAttribute('title', 'Add to queue');
				button.setAttribute('data-video-ids', videoId); // This is the video to play
				button.setAttribute('data-tooltip-text', 'Add to queue');
				button.setAttribute('onclick', "circularify.ytqnp.queue('" + videoId + ",qnp," + videoTitle + ",qnp," + videoAut + "')");
				// Add the button
				videoItems[b].appendChild(button);
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
					var playlist = document.querySelectorAll('#qnp-playlist')[0];
					var li = document.createElement('li');
					var span = document.createElement('span');
					span.style.padding = "0 10px";
					span.innerHTML = "All dem empty spaces..";
					li.appendChild(span);
					playlist.appendChild(li);
				}
			} 
			else if(playlistq.length == 1)
			{
				// Show the playlist
				playlistq[0].style.display = "block";
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
			var pc = document.querySelectorAll('#qnp-playlist-container')[0];
			pc.className = "watch-playlist"; 
			var pl = document.querySelectorAll("#qnp-playlist")[0];
			pl.className = "playlist-videos-list yt-uix-scroller";
			
			// Set the icon
			document.querySelector('#qnp-collapser').className = "yt-uix-button-icon qnp-btn-playlist-collapse-out yt-sprite";
			newCollapseState = "false";
		}
		else
		{
			// Close it
			var pc = document.querySelectorAll('#qnp-playlist-container')[0];
			pc.className = "watch-playlist collapsed"; 
			var pl = document.querySelectorAll("#qnp-playlist")[0];
			pl.className = "playlist-videos-list yt-uix-scroller collapsed";
			
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
		var qnpNode = document.querySelectorAll('#qnp-playlist')[0];
		while (qnpNode.firstChild) {
			qnpNode.removeChild(qnpNode.firstChild);
		}
		
		// If the playlist is empty, tell the user so.
		if(_playlist.length == 0)
		{	
			var li = document.createElement('li');
			var span = document.createElement('span');
			span.style.padding = "0 10px";
			span.innerHTML = "All dem empty spaces..";
			li.appendChild(span);
			qnpNode.appendChild(li);
		} 
		else
		{		
		
			// Remove the minimize state
			var pc = document.querySelectorAll('#qnp-playlist-container')[0];
			pc.className = "watch-playlist"; 
			var pl = document.querySelectorAll("#qnp-playlist")[0];
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
				
				var eIndex = document.createElement('span');
				eIndex.className = "index";
				eIndex.innerHTML = v + 1;
				
				var eClose = document.createElement('a');
				eClose.className = 'qnp-li-remove';
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
				title.innerHTML = current.title;			
				var uploader = document.createElement('span');
				uploader.className = "video-uploader-byline";
				var uplsub = document.createElement('span');
				uplsub.innerHTML = "by <strong>" + current.by + "</strong>";
				
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
	function _queueVideo(video)
	{
		// Retrieve the video data and create an object from it
		var spl = video.split(',qnp,');
		var video = {
			id: spl[0],
			title: spl[1],
			by: spl[2]
		}
	
		// Only queue when there is an object with values
		if(video !== undefined)
		{
			if(video.id !== undefined && video.id.length > 0
				&& video.title !== undefined && video.title.length > 0
				&& video.by !== undefined && video.by.length > 0)
			{
				_playlist.push(video);
				_updatePlaylist();
			}
		} else 
		{
			console.error('9312.2 - There was an error queueing a video.');
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
	
	// Play the next video
	function _playNext(event)
	{		
		if(window.YTSNPIsCorner)
		{		
			// When the player has finished playing
			if(event == 0) 
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
					
					setTimeout(function() {
						player.playVideo();
						clearTimeout(this);
					}, 1000);
				}
			}
		
		}
	}
	
	// Exposable Object
	return {
		playlist: _playlist,
		queue: _queueVideo,
		dequeue: _dequeueVideo,
		remove: _removeVideo,
		next: _playNext,
		navigating: _navigating,
		collapse: _collapsePlaylist,
		close: _hidePlaylistUI
	}
};

// Define or reference main object
var circularify = circularify || {};

// Add YTSNP object to main
circularify.ytqnp = circularify.ytqnp || ytqnp();

// Add QNP to the Circularify list of installed extension
circularify.exts.installed.push( { "id": "9312", "app": "Queue 'n Play" } );