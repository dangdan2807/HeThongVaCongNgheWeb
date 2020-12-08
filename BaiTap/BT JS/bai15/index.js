function checkEmail(){
    var input = document.getElementById("input").value;
    var pattern = /^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$;?/;
    var temp = "Email được chấp nhận.";
    if(!pattern.exec(input))
        temp = "Email không đúng định dạng";
    alert(temp);
}