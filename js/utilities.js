function stringToInt(id) {
    let stringValue = document.getElementById(id).value;
    const numberValue = parseInt(stringValue);
    return numberValue;
}

function stringToIntInnerText(id) {
    let stringValue = document.getElementById(id).innerText;
    const numberValue = parseInt(stringValue);
    return numberValue;
}