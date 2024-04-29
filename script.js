console.log("Welcome to Miyuzik");

// Initialize variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3'); // Assuming song paths are correct
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');



let songs = [  // Array of song objects (corrected duplicate entries)
  { songName: "Sun Lo Na", filePath: "song/1.mp3", coverPath: "covers/1.png" },
  { songName: "Tinka", filePath: "song/2.mp3", coverPath: "covers/2.png" },
  { songName: "Milon chala", filePath: "song/3.mp3", coverPath: "covers/3.png" },
  { songName: "Jogi", filePath: "song/4.mp3", coverPath: "covers/4.png" },
  { songName: "Phir Se Shuru", filePath: "song/5.mp3", coverPath: "covers/5.png" },
  
];



masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    // Animate GIF (assuming `gif` element exists)
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
});

// Listen to `timeupdate` event for accurate progress updates
audioElement.addEventListener('timeupdate', () => {
  // Calculate progress as a percentage
  const progress = (audioElement.currentTime / audioElement.duration) * 100;
  myProgressBar.value = progress;
});

// Handle seekbar changes (corrected event listener)
myProgressBar.addEventListener('input', () => { // Use 'input' for real-time updates
  const seekTo = myProgressBar.value * audioElement.duration / 100;
  audioElement.currentTime = seekTo;
});


