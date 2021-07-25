// INPUTS
const keyListener = window.addEventListener('keydown', (e) => {
    switch (e.key){
        case ' ':
            if ((ch - (RUNG.y + RUNG.h)) <= GROUND.h) RUNG.jumping = true
            break;
        case 'Enter':
            if (!GC.RUN_GAME) document.getElementById('start').click()
            break;
        default:
            console.log(e.key)
            break;
    }
})