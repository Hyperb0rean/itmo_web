window.onload = () => {
  
    $("#plot").on("click", (e) => {
        clearServerAlert();
        clickPointEvent(e);
    });

    $(".X_value").on("click", (e) => {
        let x = e.target;
        if (validateX(x.value)) {
            setXValue(x);
        }
        injectXAlert(x.value)
    });

    $('#Y_value').on("input", (e) => {
        let y = e.target;
        if (validateY(y.value)) {
            setYValue(y);
        }
        injectYAlert(y.value);
    });

    $('#R_value').on("input", (e) => {
        let r = e.target;
        if (validateR(r.value)) {
            setRValue(r);
            switchRadius(getValues());
        }
        injectRAlert(r.value);
    });

    $('#cleaner').on("click", () => {
        cleanPlot();
        cleanTable();
        clearRequest();
    });
}

addEventListener('load', (event) => {
    let audio = new Audio();
    audio.src='res/niclas666_-_Social_credit_Red_Sun_in_the_Sky_(musmore.com).mp3';
    audio.autoplay=true;
    audio.loop =true;
    audio.play();

});