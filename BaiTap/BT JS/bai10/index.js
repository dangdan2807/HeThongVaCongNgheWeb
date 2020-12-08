function KiemTra() {
    var a = document.getElementById("txt-input").value.length;
    document.getElementById("txt-output").value = a;
    if (a > 50) {
        alert("Bạn đã gõ quá số ký tự cho phép !");
    }
}
