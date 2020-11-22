var time = 2000;
function changeImg() {
    var arr = new Array();
    arr[0] = "../../images/image-2.jpg";
    arr[1] = "../../images/image-3.jpg";
    arr[2] = "../../images/image-1.jpg";
    var i = Math.round(Math.random() * 2);
    document.getElementById("image").src = arr[i];
    setTimeout("changeImg()", time);
}

function stopChangeImg() {
    clearTimeout(time);
}
