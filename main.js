const video = document.getElementById('video');
const blueBar = document.querySelector('.blue-bar');
const btnIcon = document.getElementById('btn-icon');

//--------Functions-----------
// Play Pause Toggle Function
const togglePlayPause = () => {
	if (video.paused) {
		btnIcon.className = 'fas fa-pause-circle';
		video.play();
	} else {
		btnIcon.className = 'fas fa-play-circle';
		video.pause();
	}
};
// Mute toggler Function
const muteToggler = () => {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector('.fa-volume-mute').style.color = 'red';
	} else {
		video.muted = false;
		document.querySelector('.fa-volume-mute').style.color = 'white';
	}
};

//--------Listening Control Click Events-----------

// Click on video event listener
video.onclick = () => {
	togglePlayPause();
};

// Play Pause Button event listener
document.getElementById('play-pause').onclick = () => {
	togglePlayPause();
};

// Fullscreen Button event listener
document.querySelector('.fullScr').onclick = () => {
	video.requestFullscreen();
};

// Backward Button event listener
document.querySelector('.backward').onclick = () => {
	video.currentTime -= 10;
};

// Forward Button event listener
document.querySelector('.forward').onclick = () => {
	video.currentTime += 10;
};

// Volume Down Button event listener
document.querySelector('.vol-down').onclick = () => {
	if (video.muted) muteToggler();
	video.volume -= 0.1;
};

// Mute Button event listener
document.querySelector('.vol-mute').onclick = muteToggler;

// Volume Button event listener
document.querySelector('.vol-up').onclick = () => {
	if (video.muted) muteToggler();
	video.volume += 0.1;
};

//--------- Duration/currentTime bar listening updating width in real time---------

video.addEventListener('timeupdate', () => {
	// Updating video time bar in real time
	var bluePos = video.currentTime / video.duration;
	blueBar.style.width = bluePos * 100 + '%';
	if (video.ended) {
		btnIcon.className = 'fas fa-play-circle';
	}

	//current time updating in real time
	document.querySelector('.time-stamps').innerHTML =
		Math.floor(video.currentTime / 60).toString().padStart(2, 0) +
		' : ' +
		Math.floor(video.currentTime % 60).toString().padStart(2, 0) +
		' / ' +
		Math.floor(video.duration / 60).toString().padStart(2, 0) +
		' : ' +
		Math.floor(video.duration % 60).toString().padStart(2, 0);
});

//----- Video time duration stamp on video load----------

video.onloadedmetadata = () => {
	document.querySelector('.time-duration').innerHTML =
		Math.floor(video.duration / 60).toString().padStart(2, 0) +
		' : ' +
		Math.floor(video.duration % 60).toString().padStart(2, 0);
};
