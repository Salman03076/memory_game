import { Sprite, type ContainerChild } from "pixi.js";
import { backgroundAsset } from "./utily";
import { Container } from "pixi.js";
import { getStage } from "..";



// initialazi game background
export class background {

    private backgroundLoad!: Sprite;
    public cardContainer: Container;


    async initbackground(): Promise<void> {
        const app: Container<ContainerChild> = getStage();
        this.backgroundLoad = new Sprite(await backgroundAsset())
        this.backgroundLoad.width = innerWidth
        this.backgroundLoad.height = innerHeight;
        app.addChildAt(this.backgroundLoad, 0);
    }
}
