var html = document.getElementsByTagName('html')[0];
var script = window.document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js";
var module = window.document.createElement('script');
module.src = "https://rawgit.com/marceljuenemann/angular-drag-and-drop-lists/312d74e6afb972370882e303775e7ffc55a0fd2c/angular-drag-and-drop-lists.min.js";

html.appendChild(script);
script.onload = function () {
	html.appendChild(module);	
};

