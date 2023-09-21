const audio = document.querySelector("#play-audio");
function playAudio() {
  audio.src = 
  audio.currentTime = 0;
  audio.play();
}
function pauseAudio() {
  audio.pause();
}
