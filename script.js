const audio = document.querySelector("audio");
const arrayTrack = ['music/bird.mp3', 'music/rain.mp3'];
let rightSkip = document.querySelector('#right');
let leftSkip = document.querySelector('#left');
audio.src = 'music/bird.mp3';
let indexArray = 0;
rightSkip.addEventListener('click',function(){track(1)})
leftSkip.addEventListener('click',function(){track(-1)})

function track(switching){
  indexArray = indexArray + switching
}

function playAudio() {
  audio.currentTime = 0;
  audio.play();
}
function pauseAudio() {
  audio.pause();
}
