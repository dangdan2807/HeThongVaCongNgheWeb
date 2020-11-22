function checkCreditCard(){
    var input = document.getElementById("input").value;
    var pattern = /[0-9]{4}/;
    var temp = "Thẻ được chấp nhận.";
    var str;
    for(var i = 0; i < input.length; i+=5)
    {
        str = input.substr(i, 4);
        if(!pattern.exec(str))
        {
            temp = "Thẻ không đúng định dạng: " + str;
            break;
        }
    }
    alert(temp);
}