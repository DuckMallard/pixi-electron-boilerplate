let PIXI = require(`pixi.js`);

// create app window
let app = new PIXI.Application({
    width: 1920,
    height: 1080,
    backgroundColor: 0x222233,
});

// append to DOM
window.addEventListener(`DOMContentLoaded`, () => {
    document.body.appendChild(app.view);
});

// handle resizing window
window.addEventListener(`resize`, () => {
    console.log(`Window Resized: ${window.innerWidth}, ${window.innerHeight}`);
    app.renderer.resize(window.innerWidth, window.innerHeight);
})
