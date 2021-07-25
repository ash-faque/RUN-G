/** @type {HTMLCanvasElement} */

// CORE GAME LOOP
const startGameLoop = () => {

    // CANVAS CLEANER
    c.clearRect(0, 0, cw, ch);

    let DELTA = (performance.now() - LUT)
    // FPS DISPLAYER
    DELTA != 0 ? FPS = (1000 / DELTA) + 1 : FPS = 0;
    LUT = performance.now()
    if((STEP % 2 === 0) && GC.SHOW_FPS) document.getElementById('fps').innerText = FPS.toFixed(0);


    // RUNG UPDATER
    // GRAVITY FOR RUNG
    if (((ch - (RUNG.y + RUNG.h)) > GROUND.h) && !RUNG.jumping){
        RUNG.y += (RUNG.vy + RUNG.g)
    }
    RUNG_DRAW()
    if (RUNG.jumping) RUNG_JUMP()
    
    // OBSTACLE
    obstacleGen()
    for(let i = 0; i < OBSTECLES.length; i++){
        OBSTECLES[i].update()
        if ((OBSTECLES[i].x + OBSTECLES[i].w) < 0) setTimeout(() => OBSTECLES.splice(i, 1), 0)
        if (OBSTECLES[i].doCollide()) endGame()
    }


    // LOOPER
    STEP ++
    if (GC.RUN_GAME) setTimeout(() => {
        requestAnimationFrame(startGameLoop)
    }, 0)
};