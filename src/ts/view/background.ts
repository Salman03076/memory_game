import { Sprite } from "pixi.js";
import { backgroundAsset } from "./utily";
import { getStage } from "..";



// initialazi game background
export class background {

    private backgroundLoad!: Sprite;

    async initbackground(): Promise<void> {
        this.backgroundLoad = new Sprite(await backgroundAsset())
        this.backgroundLoad.width = innerWidth;
        this.backgroundLoad.height = innerHeight;
        getStage().addChildAt(this.backgroundLoad, 0);
    }
}
