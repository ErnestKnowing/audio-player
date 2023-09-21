const audio = document.querySelector("audio");
function playAudio() {
  audio.src = 'music/bird.mp3';
  audio.currentTime = 0;
  audio.play();
}
function pauseAudio() {
  audio.pause();
}
