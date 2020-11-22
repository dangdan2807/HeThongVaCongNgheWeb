function check(loai){
    var re, str , x, idError;
    if(loai == 1) // check name
    {
        // Tên Phải có 2 chữ và viết hoa chữ cái đầu tiên của mỗi chữ
        // Nguyen A - tên đúng
        // Nguyen - tên sai
        // Nguyen a - tên sai
        // nguyen a - tên sai
        // nguyen S - tên sai
        re = /(^([A-Z][A-Za-z]*?\s){2,})/gm;
        str = "Ho Ten"; 
        x = document.getElementById("name").value;
        idError = "error1";
    }
    else if (loai == 2) // check mail
    {
        re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gmi;
        str = "Dia chi email";
        x =document.getElementById("email").value;
        idError = "error2";
    }
    else if (loai == 3) // check numberCard
    {
        // 16 số, mỗi lần 4 số cách nhau bởi dấu -
        // ví dụ
        // 1234-1234-1234-1234  - đúng
        // 1234 1234 1234 1234  - sai
        // 1234 1234 1234 123  - sai
        // .... 
        re = /^(\d{4}[-]*){4}$/gm
        str = "Number Card";
        x = document.getElementById("numberCard").value;
        idError = "error3";
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

var count = 1;

function DangKy(){
    var name, email, card, lop, loai, ngonNgu;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    card = document.getElementById("numberCard").value;
    lop = document.getElementById("listSelect").value;
    ngonNgu = "";
    // Kiếm tra, lấy giá trị của các ô check
    for(var i = 0; i < document.getElementById("frm").length; i++)
    {
        if(document.getElementById("frm").elements[i].checked == true && 
        document.getElementById("frm").elements[i].type == "radio")
            loai = document.getElementById("frm").elements[i].value;

        if(document.getElementById("frm").elements[i].checked == true && 
        document.getElementById("frm").elements[i].type == "checkbox")
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
    var colNgonNgu = row.insertCell(5);

    colSTT.innerHTML = count;
    colName.innerHTML = name;
    colEmail.innerHTML = email;
    colNumberCard.innerHTML = card;
    colLoai.innerHTML = loai;
    colNgonNgu.innerHTML = ngonNgu;

    document.getElementById("btn-DangKy").disabled = true;
    count++;
}