import vimeoPlayer from "@vimeo/player";


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


player.on('timeupdate', function(data) {
const currentTime = data.seconds;
console.log(currentTime);
localStorage.setItem("videoplayer-current-time", `${currentTime}`)
});


player.setCurrentTime(0.01).then(function(seconds) {
    seconds = localStorage.getItem("videoplayer-current-time");
    console.log(seconds);
    
    player.setCurrentTime(seconds);

})

