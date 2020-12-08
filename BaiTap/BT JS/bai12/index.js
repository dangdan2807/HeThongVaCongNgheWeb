var time = 1000;

function changeImg() {
    var arr = new Array();
    var str = "../../images/bt-css/";
    arr[0] = str + "anh1.jpg";
    arr[1] = str + "anh2.jpg";
    arr[2] = str + "anh3.jpg";
    arr[3] = str + "anh4.jpg";
    arr[4] = str + "anh5.jpg";
    var i = Math.round(Math.random() * arr.length);
    document.getElementById("image").src = arr[i];
    setTimeout("changeImg()", time);
}

function stopChangeImg() {
    clearTimeout(time);
}
