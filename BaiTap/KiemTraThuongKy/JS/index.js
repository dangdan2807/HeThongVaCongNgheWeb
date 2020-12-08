function changeKV() {
    var kv = document.getElementById("khuVuc").value;
    var thue = document.getElementById("giamGia");
    if (kv == 1) thue.value = "10%";
    else if (kv == 2) thue.value = "20%";
    else if (kv == 3) thue.value = "30%";
}

var idError;

function checkSoDongHo() {
    var re = /^PE16000+[0-9]{3}$/gm;
    var soDongHo = document.getElementById("maSoSongHoDien").value;
    idError = document.getElementById("error-maSo");
    if (soDongHo == null) {
        idError.innerHTML = "Thong tin bat buoc nhap";
        document.getElementById("btn-DangKy").disabled = true;
        return false;
    } else if (re.test(soDongHo)) {
        idError.innerHTML = "(*)";
        document.getElementById("btn-DangKy").disabled = false;
        return true;
    } else if (soDongHo != null && re.test(soDongHo) == false) {
        idError.innerHTML = "Khong hop le!!!";
        document.getElementById("btn-DangKy").disabled = true;
        return false;
    }
}

function checkSoTien() {
    var re = /^([0-9]{1,5})(0{3})$/gm;
    var soTien = document.getElementById("soTien").value;
    idError = document.getElementById("error-soTien");
    if (soTien == null) {
        idError.innerHTML = "Thong tin bat buoc nhap";
        document.getElementById("btn-DangKy").disabled = true;
        return false;
    } else if (re.test(soTien)) {
        idError.innerHTML = "(*)";
        document.getElementById("btn-DangKy").disabled = false;
        return true;
    } else {
        idError.innerHTML = "Khong hop le!!!";
        document.getElementById("btn-DangKy").disabled = true;
        return false;
    }
}

function checkMonth() {
    var thang = document.getElementById("month").value;
    var date = new Date();
    var month = date.getMonth();
    if (thang <= month) {
        return true;
    } else {
        return false;
    }
}

function tinhTien() {
    var soTien = document.getElementById("soTien").value;
    var giamGia = document.getElementById("giamGia").value;
    return parseInt(soTien) - (parseInt(soTien) * parseInt(giamGia)) / 100;
}

var count = 1;

function DangKy() {
    if (checkSoDongHo() && checkSoTien()) {
        var soDongHoDien = document.getElementById("maSoSongHoDien").value;
        var thang = document.getElementById("month").value;
        var n = document.getElementById("frm").length;
        var loaiHinh;
        for (var i = 0; i < n; i++) {
            if (document.getElementById("frm").elements[i].checked == true && document.getElementById("frm").elements[i].type == "radio") {
                loaiHinh = document.getElementById("frm").elements[i].value;
            }
        }

        var bang = document.getElementById("table");
        var row = bang.insertRow(count);
        var colSoDongHo = row.insertCell(0);
        var colThang = row.insertCell(1);
        var colLoaiHinh = row.insertCell(2);
        var colTongTien = row.insertCell(3);

        var tongTien = tinhTien();

        colSoDongHo.innerHTML = soDongHoDien;
        colThang.innerHTML = thang;
        colLoaiHinh.innerHTML = loaiHinh;
        colTongTien.innerHTML = tongTien;

        document.getElementById("btn-DangKy").disabled = true;
        count++;
    }
}
