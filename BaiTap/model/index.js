/* ten:                         /^([A-Z][A-Za-z]+[\s]*){1,}/gm
sđt với đầu số 09 08 07: 	    /^0[7-9]\d{8}$/gm
email: 							/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm
thẻ ngân hàng:					/^(\d{4}[-]*){4}$/gm
địa chỉ: 	                    /^([A-Za-z0-9]+[\/\\,\- +]*){1,}/gm
*/
function changeDis(){
    var getGiaTri = document.getElementById("monHoc").value;
    var setGiaTri = document.getElementById("disInput");

    if(getGiaTri === "LTHDT"){
        setGiaTri.value = "1";
    }
    else if(getGiaTri == "LTHDT2")
    {
        setGiaTri.value = "2";
    }
    else if(getGiaTri == "LTHDT3")
    {
        setGiaTri.value = "3";
    }
}

function checkName(){
    var re = /^([A-Z][A-Za-z]+[\s]*){1,}/gm;
    var str = "Ho Ten"; 
    var x = document.getElementById("name").value;
    var idError = "error1";

    if(re.test(x) == false)
    {
        document.getElementById(idError).innerHTML =  str + " khong hop le!!!";
        return false;
    }
    else{
        document.getElementById(idError).innerHTML = "(*)";
        return true;
    }
}

function checkBirth(){
    var ns = document.getElementById("birth").value;
    ns = new Date(ns);
    var crr = new Date();
    var tuoi = crr.getFullYear() - ns.getFullYear();
    var str = "Tuoi";
    var idError = "error2";

    if(tuoi >= 16)
    {
        document.getElementById(idError).innerHTML =  str + " khong hop le!!!";
        return false;
    }
    else{
        document.getElementById(idError).innerHTML = "(*)";
        return true;
    }
}

var count = 1;

function DangKy(){
    var name = document.getElementById("name").value;
    var NgaySinh = document.getElementById("birth").value;
    var n = document.getElementById("frm").length;
    var gender = "";
    var language = "";
    var monHoc = document.getElementById("monHoc").value;
    if(checkName() && checkBirth())
    {
        for(var i = 0; i < n; i++)
        {
            if(document.getElementById("frm").elements[i].checked == true && 
            document.getElementById("frm").elements[i].type == "radio")
                gender = document.getElementById("frm").elements[i].value;
            if(document.getElementById("frm").elements[i].checked == true && 
            document.getElementById("frm").elements[i].type == "checkbox")
                language += document.getElementById("frm").elements[i].value + ", ";
        }
    }

    var bang = document.getElementById("table");

    var row = bang.insertRow(count);
    var col0 = row.insertCell(0);
    var col1 = row.insertCell(1);
    var col2 = row.insertCell(2);
    var col3 = row.insertCell(3);
    var col4 = row.insertCell(4);

    col0.innerHTML = name;
    col1.innerHTML = NgaySinh;
    col2.innerHTML = gender;
    col3.innerHTML = language;
    col4.innerHTML = monHoc;
    count++;
}