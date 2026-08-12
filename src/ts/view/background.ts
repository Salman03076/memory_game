import { Sprite } from "pixi.js";
import { backgroundAsset } from "../mode/utily";
import { getStage } from "..";



// initialazi game background
export class background {

    private backgroundLoad!: Sprite;



    public async initbackground(): Promise<void> {
        this.backgroundLoad = new Sprite(await backgroundAsset())
        getStage().addChildAt(this.backgroundLoad, 0);
    }


    public backgroundResize(): void {
        const windoWidth = innerWidth;
        const windowHeight = innerHeight;
        this.backgroundLoad.width = windoWidth;
        this.backgroundLoad.height = windowHeight;
    }

}

