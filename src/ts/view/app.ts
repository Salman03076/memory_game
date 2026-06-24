import { Application } from "pixi.js";


//set the canvas envirament
export const app = new Application();

export const application = async () => {

    await app.init({ background: 'white', resizeTo: window });
    globalThis.__PIXI_APP__ = app;

    const gamebody = document.getElementById('gamebody');

    gamebody?.appendChild(app.canvas);
}

