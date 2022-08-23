
document.getElementById('btn-calculate').addEventListener('click', function (event) {
    const costPerPlayer = stringToInt('inp-cost-perplayer');
    document.getElementById('text-player-exp').innerText = costPerPlayer;
})
document.getElementById('btn-total-calc').addEventListener('click', function (event) {
    const costManager = stringToInt('inp-cost-manager');
    const costCoach = stringToInt('inp-cost-coach');
    const costPlayers = stringToIntInnerText('text-player-exp');
    const totalCost = costPlayers + costManager + costCoach;
    document.getElementById('total-cost').innerText = totalCost;
    // console.log(costPlayers);

})