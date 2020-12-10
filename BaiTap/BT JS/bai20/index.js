function xuLi(re, result, name) {
    var btn = document.getElementById("btn-DangKy");
    if (re.test(result) == false || result == "") {
        name.style.border = "1px solid red";
        btn.disabled = true;
        return false;
    } else {
        name.style.border = "1px solid black";
        btn.disabled = false;
        return true;
    }
}

// check name
function checkName() {
    var re = /^([A-Z][A-Za-z]+[\s]*){1,}/gm;
    var id = "name";
    var name = document.getElementById(id);
    var result = name.value;
    return xuLi(re, result, name);
}

var count = 1;

function DangKy() {
    var name = document.getElementById("name").value;
    var lop = document.getElementById("lop").value;
    var monHoc = document.getElementById("monHoc").value;
    var loai;
    var form = document.getElementById("form");

    if (checkName()) {
        for (var i = 0; i < form.length; i++) {
            if (form.elements[i].checked == true && form.elements[i].type == "radio") {
                loai = form.elements[i].value;
            }
        }

        var table = document.getElementById("table");
        var row = table.insertRow(count);
        var colName = row.insertCell(0);
        var colLop = row.insertCell(1);
        var colMonHoc = row.insertCell(2);
        var colLoai = row.insertCell(3);

        colName.innerHTML = name;
        colLop.innerHTML = lop;
        colMonHoc.innerHTML = monHoc;
        colLoai.innerHTML = loai;
        document.getElementById("btn-DangKy").disabled = true;
        count++;
    }
}
