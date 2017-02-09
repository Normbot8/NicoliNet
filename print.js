function printElement() {
    var pri = document.getElementById("ifmcontentstoprint").contentWindow;
    var message = '<textarea style="width: 300px; height: 150px; border-width: 0px;">' + msg + '</textarea>';
    pri.document.open();
    pri.document.write(message);
    pri.document.close();
    pri.focus();
    pri.print();
}
