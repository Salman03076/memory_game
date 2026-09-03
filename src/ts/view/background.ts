import { Sprite } from "pixi.js";
import { backgroundAsset } from "../utily";
import { getStage } from "..";



// initialazi game background
export class background {

    private backgroundLoad!: Sprite;

    constructor() {
        this.initbackground()
        addEventListener("resize", this.backgroundResize.bind(this) as EventListener);

    }

    public async initbackground(): Promise<void> {
        this.backgroundLoad = new Sprite(await backgroundAsset())
        this.backgroundLoad.height=innerHeight;
        this.backgroundLoad.width = innerWidth;
        getStage().addChildAt(this.backgroundLoad, 0);
    }


    public backgroundResize(): void {
        const windoWidth = innerWidth;
        const windowHeight = innerHeight;
        this.backgroundLoad.width = windoWidth;
        this.backgroundLoad.height = windowHeight;
    }

}

