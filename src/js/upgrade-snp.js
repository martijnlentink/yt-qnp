function closePopup()
{
	window.parent.postMessage("closePopup", "*");
}

document.getElementById("closePopup").addEventListener("click", closePopup);