sendGraphRequest = (coordinates) => {
    if (coordinates.r !== "") {
        request(coordinates);
    }
}

sendOriginRequest = () => {
    loadValues();
    clearAlerts();
    if (validateForm()) {
        request(getValues());
    } else injectAlerts();
    return false;
}

clearRequest = () => {
    $.ajax({
        url: "/labwork2_war-1.0/ControllerServlet",
        type: "POST",
        data: {'session': 'clear'},
        success: function () {
            console.log("Session cleared successful");
        },
        error: function () {
            // $('#Alert_text').html("Something wrong with clearing session!");
        }
    });
}

request = (coordinates) => {
    $.ajax({
        url: "/labwork2_war-1.0/ControllerServlet",
        type: "POST",
        data: {'x': coordinates.x, 'y': coordinates.y, 'r': coordinates.r},
        success: function (resp) {

            addPoint(resp.x, resp.y, resp.r, resp.result);
            drawPoint(resp.x, resp.y, resp.result, resp.r);
            drawTableRow(resp.x, resp.y, resp.r, resp.currentTime,resp.executionTime, resp.result);
            $('#Alert_text').empty();
        },
        error: function (resp) {
            $('#Alert_text').html(resp.responseText);
        }
    });
}