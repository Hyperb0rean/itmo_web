drawTableRow = (x, y, r, currentTime, executionTime, result) => {
    let newRow = "<tr>";
    newRow += "<th>" + parseFloat(x).toFixed(3) + "</th>";
    newRow += "<th>" + parseFloat(y).toFixed(3) + "</th>";
    newRow += "<th>" + parseFloat(r).toFixed(3) + "</th>";
    newRow += "<th>" + currentTime + "</th>";
    newRow += "<th>" + executionTime + "</th>";

    if (result){
        document.getElementById("gif").src='res/icegif-1009.gif';
        document.getElementById("credits").src='res/pluscredits.jpg';
        let audio = new Audio();
        audio.src = 'res/super-idol-chinese.mp3';
        audio.play();
        newRow += "<th> +15 social credits</th>"

    }
    else {
        document.getElementById("gif").src='res/the-rock-chinese.gif';
        document.getElementById("credits").src='res/minuscredits.png';
        let audio = new Audio();
        audio.src = 'res/999-social-credit-siren.mp3';
        audio.play();
        newRow += "<th> -30 social credits</th>"

    }

    $('#table tr:first').after(newRow);
}

cleanTable = () => {
    let standard = "<tr>\n" +
        "        <th>X</th>\n" +
        "        <th>Y</th>\n" +
        "        <th>R</th>\n" +
        "        <th>CURRENT TIME</th>\n" +
        "        <th>EXECUTION TIME</th>\n" +
        "        <th>RESULT</th>\n" +
        "    </tr>"

    $('#table').html(standard);
}
