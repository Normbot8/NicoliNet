$(function () {
    if (localStorage.getItem('hasAccount') === 'true') {
        var firstName = localStorage.getItem('firstName');
        var middleName = localStorage.getItem('middleName');
        var lastName = localStorage.getItem('lastName');
        var nickName = localStorage.getItem('nickName');
        var backColor = localStorage.getItem('backgroundColor');
        var betaTester = localStorage.getItem('betaTester');
        var astley = localStorage.getItem('astleyify');
        $('body').css('background-color', backColor);
        if (astley === "yes") {
            $('.into-pic').replaceWith('<div class=\"into-pic\"><img src=\"pics/nicoliastley.png\" alt=\"The Grate Nicoli\"></div>');
            $('body').append('<audio id=\"astleySong\" src=\"sound/astley.ogg\" loop></audio>');
            var astleySong = document.getElementById('astleySong');
            astleySong.play();
        }
        if (nickName === "") {
            $('.heading h2').text(firstName + ' ' + middleName + ' ' + lastName + "\'s NicoliNet");
        } else if (nickName !== "") {
            $('.heading h2').text(nickName + '\'s NicoliNet');
        }
        var page = window.location.pathname;
        if (page === '/index.html') {
            if (nickName === "") {
                $('#mydudes').text(firstName + ' ' + middleName + ' ' + lastName);
            } else if (nickName !== "") {
                $('#mydudes').text(nickName);
            }
        }
        if (page === '/1h@nky0u.html') {
            if (nickName === "") {
                $('#recipent').val(firstName + ' ' + middleName + ' ' + lastName);
            } else if (nickName !== "") {
                $('#recipent').val(nickName);
            }
        }

    }
})
