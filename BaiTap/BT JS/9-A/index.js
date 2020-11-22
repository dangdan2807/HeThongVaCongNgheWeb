function chuyenDoC(){
    var doF = prompt("Nhập độ F: ", "");
    var doC = (parseFloat(doF) - 32) / 9 * 5;
    document.getElementById("content").innerHTML = doF + "độ F = " + doC + " độ c";
    //(doF + "độ F = " + doC + " độ c");
}