const audio = document.querySelector("audio");
const arrayTrack = ["music/bird.mp3", "music/rain.mp3", 'music/bonfire.mp3'];
const arrayAuthor = ["Bird", "Rain", 'Fier'];
const arrayNameMusic = ["Bird sad song", "Sounds of the rain", "Sounds of the fair"];
const arrayImg = ['img/bird.jpg', "img/rain.jpg", "img/bonfire.jpg"]

let imgBackground = document.querySelector('.block-player_cover')
let author = document.querySelector(".name-author");
let nameMusic = document.querySelector(".name-music");
let rightSkip = document.querySelector("#right");
let leftSkip = document.querySelector("#left");
audio.src = "music/bird.mp3";
author.innerHTML = "Bird";
nameMusic.innerHTML = "Bird sad song"

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
  imgBackground.src = arrayImg[indexArray]
  audio.play();
  author.innerHTML = arrayAuthor[indexArray];
  nameMusic.innerHTML = arrayNameMusic[indexArray];
}

function playAudio() {
  audio.currentTime = 0;
  audio.play();
}
function pauseAudio() {
  audio.pause();
}
