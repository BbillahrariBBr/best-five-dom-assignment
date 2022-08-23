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

function getPlayerName(id1, id2) {

    document.getElementById(id1).addEventListener('click', function (event) {
        const playerName = document.getElementById(id2).innerText;
        const orderList = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = playerName;
        orderList.appendChild(li);
        const btn = document.getElementById(id1);
        //btn disable
        btn.setAttribute('disabled', true);
        // change color when btn disable
        btn.style.background = '#A2A9AF'


    })
}
function btnEnable() {
    document.getElementsByTagName('button').setAttribute('disabled', false);
}