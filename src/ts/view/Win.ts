import { Sprite } from "pixi.js";
import { WinTexture } from "../mode/utily";
// import { SoundManager } from "../mode/Audio";
import { cardStructure } from "./cardView";
import { getStage } from "..";

export class wining {

    static win: Sprite;
    static winScale: number;
    static winheight: number;
    static win_x: number;

    // win  Asset set the whenever event call
    private async initwinAssetload(): Promise<void> {
        const winTexture = await WinTexture();
        wining.win = new Sprite(winTexture);
        wining.win.anchor.set(0.5);
        wining.win.scale = 0;
        wining.win.x = 610;
        wining.win.y = 450;
        const winwidth = innerWidth;
        const wincurrentwidth = wining.win.width; ``
        const winheight = innerHeight;
        const wincurrentheight = wining.win.height
        wining.win.x = (winwidth - wincurrentwidth) / 2 + wining.win_x;
        wining.win.y = (winheight - wincurrentheight) / 2;
        wining.win.height = wining.winheight;
        cardStructure.flip(wining.win, wining.winScale, 0.5)
        getStage().addChild(wining.win);
    }



    // Call this method to initialize the win asset, e.g. await instance.initwin();
    public async initwin(): Promise<void> {
        return this.initwinAssetload();
    }

}

