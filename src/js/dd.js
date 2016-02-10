function qnpAllow(ev)
{
	if (ev.preventDefault) ev.preventDefault();
	
	return false;
}

function qnpDrag(ev)
{
	// Reference selected item in playlist
	var current = ev.target;
	
	// Obtain parent List Item
	while (current && (current.tagName != "LI" && current.className.indexOf("yt-uix-scroller-scroll-unit") == -1))
        current = current.parentNode;

	// Get selected item's current position
	var vidId = current.getAttribute("data-index");
	
	// Add the position to the drag event
	ev.dataTransfer.setData("Text", vidId);
}

function qnpDrop(ev)
{
	if (ev.preventDefault) ev.preventDefault();
	
	// Retrieve the selected item's position
	var data = ev.dataTransfer.getData("Text");
	var target = ev.target;
	
	// Obtain parent List Item for target
	while (target && (target.tagName != "LI" && target.className.indexOf("yt-uix-scroller-scroll-unit") == -1))
	{
		// When we meet the HTML tag, this means
		// 	the user probably dropped it at 
		// 	the end of the list
		if(target.tagName == "HTML")
			break;
		else
			target = target.parentNode;
	}
	
	// Default target position
	var targetPos = 0;
	
	// If the drop target equals the HTML tag, then 	
	// 	it means we need to move the video to the end
	//	of the playlist.
	if(target.tagName == "HTML")
		targetPos = circularify.ytqnp.playlist.length-1;
	else 
		targetPos = target.getAttribute("data-index"); // Get the target position in the list
		
	// It only must work when the position actually needs to be changed
	if(data != targetPos)
	{
		// Move the dragged video to the required position
		circularify.ytqnp.reorder(data, targetPos);
	}	
	
	return false;
}