// FULLSCREEN TOGGLE
document.getElementById('fs').onclick = (e) => {
    if (!document.fullscreenElement){
        document.documentElement.requestFullscreen()
        e.target.innerText = '🪐'
    } else {
        document.exitFullscreen()
        e.target.innerText = '💯'
    }
};
// INITIATION TRIGGER
document.getElementById('start').onclick = (e) => {
    if (initGame) initGame()
    e.target.style.display = 'none'
};