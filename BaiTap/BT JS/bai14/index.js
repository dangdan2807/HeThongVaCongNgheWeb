function checkCreditCard() {
    var input = document.getElementById("input").value;
    var pattern = /([\d]{4}[\s|-]){3}[\d]{4}$/;
    var temp = "Thẻ được chấp nhận.";
    if (!pattern.exec(input)) {
        temp = "Thẻ phải có định dạng: xxxx-xxxx-xxxx-xxxx hoặc xxxx xxxx xxxx xxxx";
    }
    alert(temp);
}
