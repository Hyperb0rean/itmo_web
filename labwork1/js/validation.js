function start() {

    let x = $('#x-value').val().trim().substring(0,10);
    let y = $('#y-value').val();
    let r = $('#r-value').val();


    cleanErrorMessages();

    if (validateX(x) & validateR()) {
        console.log($('form').serialize());
        $.ajax({
            type: "GET",
            url: './php/process.php',
            data: $('form').serialize(),
            success: function (data) {
                let storage = window.sessionStorage;
                storage.setItem('table_data', (storage.getItem('table_data') != null ? storage.getItem('table_data') : '') + data);
                $('#result-table tr:last').after(data);
                if (data.toString().includes('+15 social credits')){
                    document.getElementById("gif").src='res/icegif-1009.gif';
                    document.getElementById("credits").src='res/pluscredits.jpg';
                    let audio = new Audio();
                    audio.src = 'res/super-idol-chinese.mp3';
                    audio.play();

                }
                else {
                    document.getElementById("gif").src='res/the-rock-chinese.gif';
                    document.getElementById("credits").src='res/minuscredits.png';
                    let audio = new Audio();
                    audio.src = 'res/999-social-credit-siren.mp3';
                    audio.play();
                }
            },
        });
    }
}

function validateX(x) {
    if (x === "") {
        setErrorFor("x", "X can not be empty!");
        return false;
    }

    if (x.replace(/\s/g, '').length === 0 || isNaN(x)) {
        setErrorFor("x", "X should be a number!");
        return false;
    }

    if (x.split(' ').length > 1) {
        setErrorFor("x", "Enter just one number!");
        return false;
    }


    if (x >= 5 || x <= -5) {
        setErrorFor("x", "Enter number from -5 to 5.");
        return false;
    }

    return true;
}


function validateR() {
    checkboxes = $('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            return true;
        }
    }

    setErrorFor("r", "Choose R value!")
    return false;
}

function cleanErrorMessages() {
    setErrorFor("x", "");
    setErrorFor("r", "")
}

function setErrorFor(input, message) {
    $("." + input + "-error-message").html("<span>" + message + "</span>");
}