var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

document.addEventListener("deviceready", onDeviceReady, false);

	
function updateDisplay() {
	
	// Image when app is launched

	var launched = document.getElementById("#launched");
	var img = document.createElement("img");
	img.launched = "https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-031_hi_bubble_welcome-512.png";
	launched.appendChild(img);
	launched.style.height = '50px';
	launched.style.width = '50px';

	// Image when app is resumed

	var resumed = document.getElementById("#resumed");
	var img = document.createElement("img");
	img.resumed = "https://cdn4.iconfinder.com/data/icons/defaulticon/icons/png/256x256/media-play-pause-resume.png";
	resumed.appendChild(img);
	resumed.style.height = '50px';
	resumed.style.width = '50px';

	// Image when app is paused

	var paused = document.getElementById("#paused");
	var img = document.createElement("img");
	img.paused = "https://www.almanoticias.com/wp-content/uploads/2016/09/Pause.png";
	paused.appendChild(img);
	paused.style.height = '50px';
	paused.style.width = '50px';
		
	
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//
    function onDeviceReady() {
	
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }


    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	

    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }
