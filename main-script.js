const video1 = document.getElementById('toolvideo1');
const video2 = document.getElementById('toolvideo2');
const video3 = document.getElementById('toolvideo3');
const video4 = document.getElementById('toolvideo4');
const video5 = document.getElementById('toolvideo5');

const videolist = [video1,video2,video3,video4,video5];

videolist.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play()
    })
    video.addEventListener('mouseout',function(){
        video.pause()
    })
})