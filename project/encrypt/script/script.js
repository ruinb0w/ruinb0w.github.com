var text = document.getElementById("text");
var key = document.getElementById("key");

var encrypt = document.getElementById("encrypt");
var decrypt = document.getElementById("decrypt");

encrypt.addEventListener("click", function(){
    if(checkValue(text, key)){
        console.log("text.innerText: " + text.innerText);
        console.log("key.value: "+ key.value);
        text.value = panEncrypt(text.value, key.value);
    }
});

decrypt.addEventListener("click", function(){
    if(checkValue(text, key)){
        console.log("text.innerText: " + text.innerText);
        console.log("key.value: "+ key.value);
        text.value = panDecrypt(text.value, key.value);
    }
});

function checkValue(text, key) {
    if (text.value == null || text.value.length < 1) {
        alert("please input TEXT");
        return false;
    }else if(key.value == null || key.value.length < 1){
        alert("please input KEY");
        return false;
    }else{
        return true;
    }
}
