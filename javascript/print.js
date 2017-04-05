function printElement() {
    var cardWidth = document.getElementById('cardwidth').value;
    var cardHeight = document.getElementById('cardheight').value;
    var fontSize = document.getElementById('fontsize').value;
    var style = 'width: ' + cardWidth + 'in; height: ' + cardHeight + 'in; font-size: ' + fontSize + 'px; border-width: 0px; resize: none;'
    var textArea = '<textarea style=\'' + style + '\'>'
    var pri = document.getElementById("ifmcontentstoprint").contentWindow;
    var message = textArea + msg + '</textarea>';
    pri.document.open();
    pri.document.write(message);
    pri.document.close();
    pri.focus();
    pri.print();
}
