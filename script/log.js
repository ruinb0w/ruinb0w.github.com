window.onload = init;
window.onresize = init;

function init() {
    var container = document.getElementById("container");
    var height = document.documentElement.clientHeight;
    container.style.height = height - 160 + "px";
}

