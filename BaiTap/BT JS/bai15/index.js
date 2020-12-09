function checkEmail(){
    var input = document.getElementById("input").value;
    var pattern = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    var temp = "Email được chấp nhận.";
    if(!pattern.exec(input))
        temp = "Email không đúng định dạng";
    alert(temp);
}