// check numberCard
function checkNumberCard() {
    var re, str, x, idError;
    // 16 số, mỗi lần 4 số cách nhau bởi dấu -
    // ví dụ
    // 1234-1234-1234-1234  - đúng
    // 1234 1234 1234 1234  - sai
    // 1234 1234 1234 123  - sai
    // ....
    re = /^(\d{4}[-]*){4}$/gm;
    str = "Number Card";
    x = document.getElementById("numberCard").value;
    idError = "error3";

    if (re.test(x) == false) {
        document.getElementById(idError).innerHTML = str + " khong hop le!!!";
        document.getElementById("btn-DangKy").disabled = true;
    } else {
        document.getElementById(idError).innerHTML = "(*)";
        document.getElementById("btn-DangKy").disabled = false;
    }
}

// check name
function checkName() {
    var re, str, x, idError;
    // Tên Phải có 2 chữ và viết hoa chữ cái đầu tiên của mỗi chữ
    // Nguyen A - tên đúng
    // Nguyen - tên sai
    // Nguyen a - tên sai
    // nguyen a - tên sai
    // nguyen S - tên sai
    re = /^([A-Z][A-Za-z]+[\s]*){1,}/gm;
    str = "Ho Ten";
    x = document.getElementById("name").value;
    idError = "error1";
    if (re.test(x) == false) {
        document.getElementById(idError).innerHTML = str + " khong hop le!!!";
        document.getElementById("btn-DangKy").disabled = true;
    } else {
        document.getElementById(idError).innerHTML = "(*)";
        document.getElementById("btn-DangKy").disabled = false;
    }
}

function checkMail() {
    var re, str, x, idError;
    // check mail
    re = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
    str = "Dia chi email";
    x = document.getElementById("email").value;
    idError = "error2";
    if (re.test(x) == false) {
        document.getElementById(idError).innerHTML = str + " khong hop le!!!";
        document.getElementById("btn-DangKy").disabled = true;
    } else {
        document.getElementById(idError).innerHTML = "(*)";
        document.getElementById("btn-DangKy").disabled = false;
    }
}

var count = 1;

function DangKy() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var card = document.getElementById("numberCard").value;
    var lop = document.getElementById("listSelect").value;
    var ngonNgu = "";
    // Kiếm tra, lấy giá trị của các ô check
    for (var i = 0; i < document.getElementById("frm").length; i++) {
        if (
            document.getElementById("frm").elements[i].checked == true &&
            document.getElementById("frm").elements[i].type == "radio"
        )
            loai = document.getElementById("frm").elements[i].value;

        if (
            document.getElementById("frm").elements[i].checked == true &&
            document.getElementById("frm").elements[i].type == "checkbox"
        )
            ngonNgu += document.getElementById("frm").elements[i].value + ", ";
    }

    // tạo bảng
    var bang = document.getElementById("table-showInfo");

    var row = bang.insertRow(count);
    var colSTT = row.insertCell(0);
    var colName = row.insertCell(1);
    var colEmail = row.insertCell(2);
    var colNumberCard = row.insertCell(3);
    var colLoai = row.insertCell(4);
    var colHoa = row.insertCell(5);
    var colNgonNgu = row.insertCell(6);

    colSTT.innerHTML = count;
    colName.innerHTML = name;
    colEmail.innerHTML = email;
    colNumberCard.innerHTML = card;
    colLoai.innerHTML = loai;
    colHoa.innerHTML = lop;
    colNgonNgu.innerHTML = ngonNgu;

    document.getElementById("btn-DangKy").disabled = true;
    count++;
}
