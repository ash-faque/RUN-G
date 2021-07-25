// CONFIGURATION OBJ
const GC = {
    SHOW_FPS: true,
    RUN_GAME: false,
    PRELOADED: false,
    SCALE: 0.8,
};

// GLOBAL CONSTANDS
const bg_canvas = document.getElementById('bg_canvas'),
      bg_c = bg_canvas.getContext('2d'),
      canvas = document.getElementById('player_canvas'),
      cw = canvas.width = innerWidth*GC.SCALE,
      ch = canvas.height = innerHeight*GC.SCALE,
      c = canvas.getContext('2d');

// GLOBAL VARIABLES
var LUT = 0,
    FPS = 0,
    STEP = 0;


// PRELOAD ASSETS
const ASSETS_TO_LOAD = {
    run_1: 'assets/run/frame-1.png',
    run_2: 'assets/run/frame-2.png',
    run_3: 'assets/run/frame-3.png',
    run_4: 'assets/run/frame-4.png',
    run_5: 'assets/run/frame-5.png',
    jump_up: 'assets/jump/jump-up.png',
    poison: 'assets/poison.png',
};

var ASSETS = {},
    RUN_FRAMES = [];


// ASSET LOADER
let names = Object.keys(ASSETS_TO_LOAD),
    srcs = Object.values(ASSETS_TO_LOAD);
for (let i = 0; i < names.length; i++){
    let tempImage = new Image()
    tempImage.src = srcs[i]
    tempImage.onload = () => ASSETS[names[i]] = { image: tempImage } 
    if (i == names.length - 1) GC.PRELOADED = true 
};


// SORT FRAMES
const sortFrames = () => {
    RUN_FRAMES = [
        ASSETS.run_1.image,
        ASSETS.run_2.image,
        ASSETS.run_3.image,
        ASSETS.run_4.image,
        ASSETS.run_5.image,
        ASSETS.jump_up.image,
    ]
}