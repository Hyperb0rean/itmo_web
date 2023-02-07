$(function () {
    const DELAY = 12000;

    function setDate(date) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        day = (day < 10) ? '0' + day : day;
        month = (month < 10) ? '0' + month : month;

        $('.datetime__date').html(`${day}.${month}.${year}`);
    }

    function setTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        $('.datetime__time').html(`${hours}:${minutes}:${seconds}`);
    }

    function setCurrentDateTime() {
        let date = new Date();
        setDate(date);
        setTime(date);
    }

    setCurrentDateTime();
    setInterval(setCurrentDateTime, DELAY);
});


addEventListener('load', (event) => {
    let audio = new Audio();
    audio.src='resources/sound/intro.mp3';
    audio.autoplay=true;
    audio.loop =true;
    audio.play();

});