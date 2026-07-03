import { Sprite, Texture } from "pixi.js";
import { backgroundAsset } from "../../model/Assets/Utily/utily";
import { app } from "./app";
// initialazi game background
export class background {
    backgroundLoad;
    async init() {
        this.backgroundLoad = new Sprite(await backgroundAsset());
        this.backgroundLoad.width = app.screen.width;
        this.backgroundLoad.height = app.screen.height;
        app.stage.addChild(this.backgroundLoad);
        console.log("background loaded");
    }
}
//# sourceMappingURL=background.js.map