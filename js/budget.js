
document.getElementById('btn-calculate').addEventListener('click', function (event) {
    const costPerPlayer = stringToInt('inp-cost-perplayer');
    document.getElementById('text-player-exp').innerText = costPerPlayer;
    document.getElementById('inp-cost-perplayer').value = '';
})
document.getElementById('btn-total-calc').addEventListener('click', function (event) {
    const costManager = stringToInt('inp-cost-manager');
    const costCoach = stringToInt('inp-cost-coach');
    const costPlayers = stringToIntInnerText('text-player-exp');
    const totalCost = costPlayers + costManager + costCoach;
    document.getElementById('total-cost').innerText = totalCost;

    // value and text empty
    document.getElementById('inp-cost-manager').value = '';
    document.getElementById('inp-cost-coach').value = '';
    document.getElementById('text-player-exp').innerText = 0;
    // console.log(costPlayers);

})