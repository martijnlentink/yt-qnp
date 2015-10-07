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
				var videoDur = videoItems[b].querySelectorAll('.video-time')[0].innerHTML;
				
				// Create the button and add the required attributes
				var button = document.createElement('button');
				button.className = "yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-tooltip qnp-button qnp-btn-" + videoId;
				button.setAttribute('type', 'button');
				button.setAttribute('role', 'button');
				button.setAttribute('title', 'Add to queue');
				button.setAttribute('data-video-ids', videoId); // This is the video to play
				button.setAttribute('data-tooltip-text', 'Add to queue');
				button.setAttribute('onclick', "circularify.ytqnp.queue('" + videoId + ",qnp," + videoTitle + ",qnp," + videoDur + "')");
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
		if(windows.YTSNPIsCorner)
		{
			// Create the container div
			var div = document.createElement('div');
			div.className = "playlist-videos-container yt-scrollbar-dark yt-scrollbar"
			
			// Create the playlist
			var ol = document.createElement('ol');
			ol.id = "qnp-playlist";
			ol.className = "playlist-videos-list yt-uix-scroller";
			ol.setAttribute('data-scroller-offset', '0');
			ol.setAttribute('data-scroller-mousewheellistener');
			ol.setAttribute('data-scroller-scroll-listener');
			
			// Add the playlist to the body
			div.appendChild(ol);			
			document.body.appendChild(div);
			
			// Update the visible playlist
			_updatePlaylist();
		}
	}
	
	// Update the visual playlist
	function _updatePlaylist()
	{		
		for(var v = 0; v < _playlist.length-1; v++)
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
			eIndex.innerHTML = v == 0 ? "&#9658;" : v; // Show ► for playing, or index
			
			var eLink = document.createElement('a');
			
			var eThumb = document.createElement('span');
			eThumb.className = "yt-thumb yt-thumb-72";
			var eThumbDef = document.createElement('span');
			eThumbDef.className = "yt-thumb-default";
			var eThumbClip = document.createElement('span');
			eThumbClip.className = "yt-thumb-clip";
			var img = document.createElement('img');
			img.setAttribute('src', 'https://i.ytimg.com/vi/' + current.id + '/default.jpg');
			img.setAttribute('width', '72');
			
			// Wrap up the link tag
			eThumbClip.appendChild(img);
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
			uplsub.innerHTML = current.by;
			
			// Wrap up Description
			eDesc.appendChild(title);
			uploader.appendChild(uplsub);
			eDesc.appendChild(uploader);			
			
			// Add all the elements
			li.appendChild(eIndex);
			li.appendChild(eLink);
			li.appendChild(eDesc);
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
				console.info(video);
				_playlist.push(video);
				_updatePlaylist();
			}
		} else 
		{
			console.error('9312.2 - There was an error queueing a video.');
		}
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
					}, 3000);
				}
			}
		
		}
	}
	
	// Exposable Object
	return {
		playlist: _playlist,
		queue: _queueVideo,
		dequeue: _dequeueVideo,
		next: _playNext,
		navigating: _navigating
	}
};

// Define or reference main object
var circularify = circularify || {};

// Add YTSNP object to main
circularify.ytqnp = circularify.ytqnp || ytqnp();

// Add QNP to the Circularify list of installed extension
circularify.exts.installed.push( { "id": "9312", "app": "Queue 'n Play" } );