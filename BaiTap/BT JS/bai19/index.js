function set_background() {
    var docBody = document.getElementsByTagName("body")[0];
    var myBodyElements = docBody.getElementsByTagName("p");
    var myp1 = myBodyElements[0];
    myp1.style.background = "rgb(255, 0, 0)";

    var myp2 = myBodyElements[1];
    myp2.style.background = "rgb(255, 255, 0)";
}