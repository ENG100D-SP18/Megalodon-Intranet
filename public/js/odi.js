// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	//add gestures listener here
	$(function(){
		$(".judge-img").bind("taphold", tapholdHandler);

		function tapholdHandler(event){
			// get id of the event source
			var targetIDPrefix = event.target.id;
			console.log("got prefix: " + targetIDPrefix);
			// show bio
			$("#" + targetIDPrefix + "-bio").show();
		}
	});
}

// swipe event listener
$(function(){
	$("div.box").bind("taphold", tapholdHandler);
	function tapholdHandler(event){
		$(event.target).addClass("taphold");
	}
})