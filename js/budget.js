
document.getElementById('btn-calculate').addEventListener('click', function (event) {
    const costPerPlayer = stringToInt('inp-cost-perplayer');
    if (isNaN(costPerPlayer)) {
        alert("You Enter a wrong value");
        document.getElementById('inp-cost-perplayer').value = '';
    }
    else {
        const numberofPlayer = document.getElementsByTagName('li').length;
        document.getElementById('text-player-exp').innerText = costPerPlayer * numberofPlayer;
        document.getElementById('inp-cost-perplayer').value = '';
    }

})
document.getElementById('btn-total-calc').addEventListener('click', function (event) {
    const costManager = stringToInt('inp-cost-manager');
    const costCoach = stringToInt('inp-cost-coach');
    if (isNaN(costCoach) || isNaN(costManager)) {
        alert("You Enter a wrong value");
        document.getElementById('inp-cost-manager').value = '';
        document.getElementById('inp-cost-coach').value = '';
    }
    else {
        const costPlayers = stringToIntInnerText('text-player-exp');
        const totalCost = costPlayers + costManager + costCoach;
        document.getElementById('total-cost').innerText = totalCost;

        // value and text empty
        document.getElementById('inp-cost-manager').value = '';
        document.getElementById('inp-cost-coach').value = '';
        document.getElementById('text-player-exp').innerText = 0;
        // console.log(costPlayers);
    }


})