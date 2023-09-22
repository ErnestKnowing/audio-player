const audio = document.querySelector("audio");
const arrayTrack = ["music/bird.mp3", "music/rain.mp3", "music/bonfire.mp3"];
const arrayAuthor = ["Bird", "Rain", "Fire"];
const arrayNameMusic = [
  "Sounds of the bird",
  "Sounds of the rain",
  "Sounds of the fire",
];
const arrayImg = ["img/bird.jpg", "img/rain.jpg", "img/bonfire.jpg"];

let durationTime = document.querySelector(".duration");
let allTime = document.querySelector(".all-time");
let progressBar = document.querySelector(".progress-bar_border");
let imgBackground = document.querySelector(".block-player_cover");
let author = document.querySelector(".name-author");
let nameMusic = document.querySelector(".name-music");
let rightSkip = document.querySelector("#right");
let leftSkip = document.querySelector("#left");
audio.src = "music/bird.mp3";
author.innerHTML = "Bird";
nameMusic.innerHTML = "Sounds of the bird";

let indexArray = 0;
rightSkip.addEventListener("click", function () {
  track(1);
});
leftSkip.addEventListener("click", function () {
  track(-1);
});

function track(switching) {
  indexArray = indexArray + switching;
  if (indexArray >= arrayTrack.length) {
    indexArray = 0;
  }
  if (indexArray < 0) {
    indexArray = arrayTrack.length - 1;
  }
  audio.src = arrayTrack[indexArray];
  imgBackground.src = arrayImg[indexArray];
  audio.play();
  author.innerHTML = arrayAuthor[indexArray];
  nameMusic.innerHTML = arrayNameMusic[indexArray];
}
function onProgress(event) {
  let duration = event.target.duration;
  let currentTime = event.target.currentTime;
  let progress = (100 / duration) * currentTime;

  const time = audio.duration;
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  durationTime.innerHTML = `${minutes}:${seconds.toFixed(0)}`;

  progressBar.style.width = progress + "%";
}
audio.addEventListener("timeupdate", onProgress);

setInterval(() => {
  const currentTime = audio.currentTime;
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;

  allTime.innerHTML = `${minutes}:${seconds.toFixed(0)}`;
}, 1000);
function playAudio() {
  let duration = audio.duration;
  let currentTime = audio.currentTime;
  let progress = (100 / duration) * currentTime;

  progressBar.style.width = progress + "%";
  audio.play();
}
function pauseAudio() {
  audio.pause();
}
