$(function () {
    var continueSpam = false;
    var balmNumber;
    var loopnumber = 0;

    function startSpam() {
        balmNumber = $("#numberofplays").val();
        $("#spambutton").off("click", startSpam);
        spamCheck();
    }

    function spamCheck() {
        if (loopnumber < balmNumber) {
            var nicoliNet = new Audio('sound/Nicolinet Theme.m4a');
            nicoliNet.play();
            loopnumber++;
            setTimeout(spamCheck, 100);
        } else {
            loopnumber = 0;
            $("#spambutton").on("click", startSpam);
        }
    }
    $("#spambutton").on("click", startSpam);
})
