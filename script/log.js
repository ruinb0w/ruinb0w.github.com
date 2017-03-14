window.onload = init;

function init() {
    var click = document.getElementById("click");
    click.onclick = clickHandler;
}

function clickHandler() {
    var pass = document.getElementById("passwdInput");
    if (pass.value == "zero") {
                var container = document.getElementById("container");
        var passDiv = document.getElementById("passwdDiv");
        container.style.display = "block";    passDiv.style.display = "none";
    }
}
