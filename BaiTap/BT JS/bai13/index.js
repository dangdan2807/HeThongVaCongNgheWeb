function check(){
    var input = document.getElementById("text-input").value;
    var char = input.charAt(0);
    var char_upperCase = char.toUpperCase();
    var temp = "không";
    if(char == char_upperCase)
        temp = "là"
    var output = document.getElementById("text-output").value = temp;
}

function check2(){
    var input = document.getElementById("text-input").value;
    var char = input.charAt(0);
    var pattern = /^[A-Z]/gm;
    var temp = "không";
    if(pattern.exec(char))
        temp = "là";
    var output = document.getElementById("text-output").value = temp;
}
