function xuLi(re, result, name) {
    if (re.test(result) == false || result == "") {
        name.style.borderColor = "red";
        return false;
    } else {
        name.style.borderColor = "black";
        return true;
    }
}

function checkName(n) {
    var re = /^([A-Z][A-Za-z]+[\s]*){1,}/gm;
    var id = "";
    if (n == 1) id = "firstName";
    else id = "lastName";
    var name = document.getElementById(id);
    var result = name.value;
    return xuLi(re, result, name);
}

function checkEmail() {
    var re = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
    var id = "email";
    var email = document.getElementById(id);
    var result = email.value;
    return xuLi(re, result, email);
}

function checkReEmail() {
    var email = document.getElementById("email");
    var resEmail = email.value;
    var reEmail = document.getElementById("reEmail");
    var resReEmail = reEmail.value;
    if (resEmail == "") {
        email.style.borderColor = "red";
        return false;
    } else if (resReEmail == "") {
        reEmail.style.borderColor = "red";
        return false;
    } else if (resReEmail != resEmail) {
        reEmail.style.borderColor = "red";
        return false;
    } else if (resEmail == resReEmail) {
        reEmail.style.borderColor = "black";
        return true;
    }
}

function checkPassword() {
    var re = /^[\w-@#$%^&*!]{6,}$/gm;
    var id = "password";
    var password = document.getElementById(id);
    var result = password.value;
    return xuLi(re, result, password);
}

function checkBirthYear() {
    var birthYear = document.getElementById("birthYear");
    var result = birthYear.value;
    var namSinh = eval(result);
    if (namSinh > 2002 || result == "") {
        birthYear.style.borderColor = "red";
        return false;
    } else {
        birthYear.style.borderColor = "black";
        return true;
    }
}

function check() {
    var btn = document.getElementById("btn-DangKy");
    if (checkName() && checkEmail() && checkPassword() && checkReEmail() && checkBirthYear())
    {
        btn.style.opacity = "1";
        btn.disabled = false;
        return true;
    }
    else
    {
        btn.style.opacity = "0.5";
        btn.disabled = true;
        return false;
    }
}

function DangKy() {
    if (check()) alert("Đăng Ký Thành Công");
    else alert("Đăng Ký Không Thành Công");
}
