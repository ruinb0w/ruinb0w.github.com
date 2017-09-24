var playerSrc="https://www.bilibili.com/html/html5player.html?";
var playerModeControl="as_wide=1";

var player = document.getElementById("player");
var videoSet = document.getElementById("video_set");
videoSet.addEventListener("click", function(even){
    console.log(even.target.className);
    if(even.target.className == "select_video"){
        player.src=playerSrc+"&"+playerModeControl+"&"+even.target.value;
    }
});


