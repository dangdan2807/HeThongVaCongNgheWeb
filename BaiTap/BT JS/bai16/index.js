function checkIP() {
    var input = document.getElementById("input").value;
    var re = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/gm;
    // var re /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm;
    // 8.8.8.8              true
    // 192.14.23.4          true
    // 1.0.0.255            true
    // 127.0.0.1            true
    // 192.168.1.1          true
    // 192.168.1.255        true
    // 192.168.255.255      true
    // 192.168.1.2555       false
    // 0.0.0.0              true
    // 1.1.1.01             false
    // 255.255.255.255      true
    // 192.168.0.1          true
    // 254.254.254.254      true
    // 172.24.1.210         true
    // 200.200.200.200      true
    // 1.53.41.61           true
    // 192.0.2.235          true
    if (re.test(input) == false || input == "") alert("IP không hợp lệ");
    else alert("IP hợp lệ");
}

function checkURL() {
    var input = document.getElementById("input").value;
    var re = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
    // URL True
    // http://foo.co.uk/
    // https://www.example.com
    // http://www.example.com
    // www.example.com
    // example.com
    // http://blog.example.com
    // http://www.example.com/product
    // http://www.example.com/products?id=1&page=2
    // http://www.example.com#up
    // http://255.255.255.255
    // 255.255.255.255
    // http://www.site.com:8008

    // URL false
    // http://invalid.com/perl.cgi?key= | http://web-site.com/cgi-bin/perl.cgi?key1=value1&key2
    // htt://www.google.com                     
    // ://www.google.com
    if (re.test(input) == false || input == "") alert("URL không hợp lệ");
    else alert("URL hợp lệ");
}
function checkZipCode() {
    var input = document.getElementById("input").value;
    var re = /^[0-9]{5}(?:-[0-9]{4})?$/gm;
    // /(^\d{5}$)|(^\d{5}-\d{4}$)/gm

    if (re.test(input) == false || input == "") alert("ZipCode không hợp lệ");
    else alert("ZipCode hợp lệ");
}
