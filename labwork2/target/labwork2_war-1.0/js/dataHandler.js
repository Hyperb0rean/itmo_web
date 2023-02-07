const X_START = -2;
const X_END = 2;

const Y_START = -3;
const Y_END = 5;

const R_START = 1;
const R_END = 5;

let values = {
    x: null,
    y: null,
    r: null
};

loadValues = () => {
     values.y = $('#Y_value').val().trim().substring(0,10);
     values.x = $('#X_value').val();
     values.r = $('#R_value').val();
}

getValues = () => {
    return values;
}

setXValue = (target) => {
    values.x = target.value;
}


setYValue = (target) => {
    values.y = target.value;
}

setRValue = (target) => {
    values.r = target.value;
}

validateForm = () => {
    return validateX(values.x) &&
        validateY(values.y) &&
        validateR(values.r);
}

validateX = (x) => {
    console.log(validateXRange(x))
    return validateXRange(x);
}

validateY = (y) => {
    console.log(validateTextExist(y) &&
        validateTextForm(y) &&
        validateYRange(y));
    return validateTextExist(y) &&
        validateTextForm(y) &&
        validateYRange(y);
}

validateR = (r) => {
    console.log(validateTextExist(r) &&
        validateTextForm(r) &&
        validateRRange(r));
    return validateTextExist(r) &&
        validateTextForm(r) &&
        validateRRange(r);
}



validateTextExist = (field) => {
    return !jQuery.isEmptyObject(field) && (field.trim() !== "");
}

validateTextForm = (field) => {
    return (/^(0$|-?[0-9]\d*(\.\d*[0-9]$)?|-?0\.\d*[0-9])$/).test(field);
}

validateXRange = (field) => {
    return (Number(field) >= X_START) && (Number(field) <= X_END);
}

validateYRange = (field) => {
    return (Number(field) > Y_START) && (Number(field) < Y_END);
}

validateRRange = (field) => {
    return (Number(field) >= R_START) && (Number(field) <= R_END);
}