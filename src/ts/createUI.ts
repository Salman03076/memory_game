
import { Sprite, Assets, Graphics, } from "pixi.js";
import   { app }  from "./App";




export class boxcard {
    public cardContainer: any;

    constructor() {
        this.cardContainer = new Graphics();
        this.cardContainer.lineStyle(2, 0xff0000, 1);
        this.cardContainer.drawRect(0, 0, 500, 500);
        this.cardContainer.zIndex = 10;
        this.cardContainer.scale.set(1.0);
        this.cardContainer.x = 543.5;
        this.cardContainer.y = 183.5;
        app.stage.addChild(this.cardContainer);

    }

}


class background {
    private texture: Sprite;
    private background: Sprite;
    constructor() {
    }
    async init() {
        this.texture = await Assets.load("Assets/background/background.avif");
        this.background = new Sprite(this.texture);
        this.background.width = app.screen.width;
        this.background.height = app.screen.height;
        app.stage.addChild(this.background);
    }
}

const gameBoard = new background();
