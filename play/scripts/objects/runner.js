// GROUND OBJECT
const GROUND = {
    h: 120,
    color: {
        top: '',
        middle: '',
        bottom: ''
    }
}

// RUNNER OBJECT
const RUNG = {
    g: 0.25,
    w: 60,
    h: 90,
    x : cw*0.4,
    y: (ch - GROUND.h - 80),
    vx: 0,
    vy: 5,
    maxJumpHeight: 150,
    jumping: false,
};

// RUNNER DRAW
const RUNG_DRAW = () => {
    // MOTION FOR RUNG
    RUNG.vx = ((Math.random() * 2) - 1)
    RUNG.x += RUNG.vx
    if (RUNG.jumping){
        c.drawImage(RUN_FRAMES[5], RUNG.x, RUNG.y, RUNG.w, RUNG.h)
    } else {
        c.drawImage(RUN_FRAMES[STEP % 4], RUNG.x, RUNG.y, RUNG.w, RUNG.h)
    }
};

// RUNG JUMP
const RUNG_JUMP = () => {
    if ((ch - (RUNG.y + RUNG.h)) < (RUNG.maxJumpHeight + GROUND.h)){
        RUNG.y -= RUNG.vy
        if ((ch - (RUNG.y + RUNG.h)) >= (RUNG.maxJumpHeight + GROUND.h)){
            RUNG.jumping = false
        }
    }
};
