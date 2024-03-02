const veHaaniyan = new Audio("./Music/y2mate.com - Ve Haaniyaan  Official Video  Ravi Dubey  Sargun Mehta  Danny  Avvy Sra  Dreamiyata Music.mp3");
const ajJaaneKiZid = new Audio("./Music/Aaj-Jaane-Ki-Zidd-Na-Karo-Farida-Khanum.mp3");
const lakhMainManaun = new Audio("/Music/Lakh Main Manau Lekin Kahan Mera Sunta Hai [128 Kbps]-(Fun2Desi.Com.Se).mp3");
const hamSafar = new Audio("./Music/Quratulain_Balouch___Wo_HuMSaFaR_Thaa_Lyrics__Full_HD_(128k)");

const prevBtn = document.getElementById("previous");
const playBtn = document.getElementById("stop");
const nextBtn = document.getElementById("next");
const songName = document.getElementsByClassName('.song-name');
const playPauseIcon = document.getElementById("stop");

const songs = [
    {audio: veHaaniyan, audioName: "ve Haaniyan"},
    {audio: ajJaaneKiZid, audioName: "aj Jaane ki zid na kro"},
    {audio: lakhMainManaun, audioName: "lakh Main Manau"},
    {audio: hamSafar, audioName: "wo Hamsafar tha"}
];

for(const song of songs){
    song.audio.addEventListener('ended', () => {
        updateSong('next');
        playPauseSong();
    })
}

let current = 0;
let currentSong = songs[current].audio;
songName.textContent = songs[current].audioName;

playBtn.addEventListener('click',()=> {
    if(currentSong.paused){
        currentSong.play();
        playPauseIcon.className = 'fa-solid fa-pause';
    }else{
        currentSong.pause();
        playPauseIcon.className = 'fa-solid fa-play'
    }
  })
const updateSong = (action) => {
    currentSong.pause();
    currentSong.currentTime = 0;
    if(action=== "next"){
        current++;
      if(current> songs.length-1) current = 0;
    }
    if(action === "prev"){
        current--;
        if(current< 0) current = songs.length -1;
    }
    currentSong = songs[current].audio;
        songName.textContent = songs[current].audioName;
}
nextBtn.addEventListener('click', () =>{
    updateSong('next');
    playPauseSong();
})
prevBtn.addEventListener('click', () =>{
    updateSong('prev');
    playPauseSong();
})
const playPauseSong = ()=> {
  if(currentSong.paused){
    currentSong.play();
    playPauseIcon.className = 'fa-solid fa-pause';
  }
  else {
    currentSong.pause();
    playPauseIcon.className = 'fa-solid fa-play';
  }
}