// updatePlayButton updates the playback icon and tooltip
// depending on the playback state
function updatePlayButton() {
    playbackIcons.forEach(icon => icon.classList.toggle('hidden'));
  }
// Select Element here
const video = document.getElementById('video');
const videoControls = document.getElementById('video-controls');

const videoWorks = !!document.createElement('video').canPlayType;
if (videoWorks){
    video.controls = false;
    videoControls.classList.remove('hidden');
}
const playButton = document.getElementById('play');

// Add functions here

// togglePlay toggles the playback state of the video.
// If the video playback is paused or ended, the video is played
// otherwise, the video is paused
function togglePlay() {
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  }
// AddEventlistener here

playButton.addEventListener('click', togglePlay);

// This is how we do it !!! selec one video control, create a function that implement a specific functio-
//nality then hook is up via event listener.
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
//new subject
const playbackIcons = document.querySelectorAll('.playback-icons use');
//updatePlayButton updates the playback icon and tooltip
//depending on the playback state
function updatePlayButton(){
  playbackIcons.forEach(icon => icon.classList.toggle('hidden'));
}
video.addEventListener('play, updatePlayButton');
video.addEventListener('pause', updatePlayButton);

//tooltip
function updatePlayButton(){
  playbackIcons.forEach(icon => icon.classList.toggle('hidden'));

  if (video.paused){
    playButton.setAttribute('data-title', 'play (k)')
  } else {
    playButton.setAttribute('data-title', 'pause (k)')
  }
}
