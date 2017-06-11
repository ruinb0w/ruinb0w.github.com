window.onload = init;
window.onresize = rheight;

var container;

function init(){
    container = document.getElementById("container");
    rheight();
}

function rheight() {
    var height = document.documentElement.clientHeight;
    container.style.height = height - 155 + "px";
}

