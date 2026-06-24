import { Sprite, Texture } from "pixi.js";
import { app } from "./app";
import { backgroundAsset } from "./utily";



// initialazi game background
export class background {

    private backgroundLoad!: Sprite;

    async init(): Promise<void> {
        this.backgroundLoad = new Sprite(await backgroundAsset())
        this.backgroundLoad.width = app.screen.width;
        this.backgroundLoad.height = app.screen.height;
        app.stage.addChild(this.backgroundLoad);
        console.log("background loaded");

    }

}


const bg = new background();
bg.init();




