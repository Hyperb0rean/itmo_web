addEventListener('load', (event) => {

    $('input[name="r-value"]').on('change', function() {
        $('input[name="' + this.name + '"]').not(this).prop('checked', false);
    });
});

addEventListener('load', (event) => {

    if (window.sessionStorage.getItem('table_data') != null) {
        console.log("placeholder");
        console.log(window.sessionStorage.getItem('table_data'));
        $('#result-table tr:last').after(window.sessionStorage.getItem('table_data'));
    }

});

addEventListener('load', (event) => {
    let audio = new Audio();
    audio.src='res/niclas666_-_Social_credit_Red_Sun_in_the_Sky_(musmore.com).mp3';
    audio.autoplay=true;
    audio.loop =true;
    audio.play();

});