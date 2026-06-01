import { Application } from "pixi.js";

export const application = async () => {

    const app = new Application();
    app.init({ background: '0x000000' })

    const gamebody = document.getElementById('gamebody');

    gamebody?.appendChild(app.canvas);

};
