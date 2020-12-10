function tinhTien() {
    var idGia = [];
    var idSL = [];
    var sum = 0;

    idGia[0] = "gia-1";
    idGia[1] = "gia-2";
    idGia[2] = "gia-3";
    idGia[3] = "gia-4";
    idGia[4] = "gia-5";
    idSL[0] = "sl-1";
    idSL[1] = "sl-2";
    idSL[2] = "sl-3";
    idSL[3] = "sl-4";
    idSL[4] = "sl-5";

    for (var i = 0; i < 5; i++) {
        var gia = document.getElementById(idGia[i]).value;
        var sl = document.getElementById(idSL[i]).value;
        sum += gia * sl;
    }
    document.getElementById("thanhTien").value = sum;
}
