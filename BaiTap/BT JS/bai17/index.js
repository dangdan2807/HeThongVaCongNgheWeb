function check(loai){
    var re, str , x, idError;
    if(loai == 1) // check user
    {
        re = /^[A-Za-z0-9_\.]{6,32}$/gm;
        str = "Ten dang nhap"; 
        x = document.getElementById("user").value;
        idError = "error1";
    }
    else if(loai == 2) // check password
    {
        // mật khâu có tối thiểu 8 kí tự: có thể bao gồm các kí tự ngoài chữ như sau:
        // @ # $ % ^ & * !
        re = /^[\w-@#$%^&*!]{8,}$/gm;
        str = "Mat khau"; 
        x = document.getElementById("password").value;
        idError = "error2";
    }
    else if(loai == 4) // check name
    {
        // ví dụ đúng: Pham Dang Dan
        // ví dụ sai: pham sang san
        re = /(^([A-Z][A-Za-z]*?[\s]){2,})/gm;
        str = "Ho Ten"; 
        x = document.getElementById("name").value;
        idError = "error4";
    }

    if(re.test(x) == false)
    {
        document.getElementById(idError).innerHTML =  str + " khong hop le!!!";
        document.getElementById("btn-DangKy").disabled = true;
    }
    else{
        document.getElementById(idError).innerHTML = "(*)";
        document.getElementById("btn-DangKy").disabled = false;
    }
}

function checkPassword(){
    var password = document.getElementById("password").value;
    var rePassword = document.getElementById("rePassword").value;
    var idError = "error3";
    if(rePassword != password)
    {
        document.getElementById(idError).innerHTML = "Mat khau khong khop!!!";
        document.getElementById("btn-DangKy").disabled = true;
    }
    else{
        document.getElementById(idError).innerHTML = "(*)";
        document.getElementById("btn-DangKy").disabled = false;
    }
}