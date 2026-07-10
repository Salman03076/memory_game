import { Sprite } from "pixi.js";
import { backgroundAsset } from "./utily";
import { Container } from "pixi.js";
import { app } from "../app";



// initialazi game background
export class background {

    private backgroundLoad!: Sprite;
    public cardContainer: Container;


    constructor() {
        this.initbackground()
    }

    async initbackground(): Promise<void> {
        this.backgroundLoad = new Sprite(await backgroundAsset())
        this.backgroundLoad.width = app.screen.width;
        this.backgroundLoad.height = app.screen.height;
        app.stage.addChild(this.backgroundLoad);

        this.cardContainer = new Container();
        this.cardContainer.zIndex = 10;
        this.cardContainer.scale.set(1.0);
        this.cardContainer.x = 543.5;
        this.cardContainer.y = 183.5;
        app.stage.addChild(this.cardContainer);
    }





}



