
document.getElementById('btn-calculate').addEventListener('click', function (event) {
    const costPerPlayer = stringToInt('inp-cost-perplayer');
    document.getElementById('text-player-exp').innerText = costPerPlayer;
})
