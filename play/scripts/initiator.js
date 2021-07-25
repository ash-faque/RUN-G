// GAME SPESIFIC
var OBSTECLES = [];

// INITIATOR
const initGame = () => {
    if (GC.PRELOADED){
        OBSTECLES = []
        LUT = 0
        FPS = 0
        STEP = 0
        GC.RUN_GAME = true;
        sortFrames()
        obstacleGen();
        startGameLoop();
    }
};

// END ER
const endGame = () => {
    GC.RUN_GAME = false
    c.font = '30px monospace'
    c.fillText(`YOU HITTEN POISON AFTER RUNNING ${(STEP*0.2).toFixed(2)} METERS`, cw*.2, ch*.2)
    
    document.getElementById('start').style.display = 'block'
}