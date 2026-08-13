import { Sprite } from "pixi.js";
import { WinTexture } from "../mode/utily";
import { getStage } from "..";
import { cardStructure } from "./cardCreate";


export class wining {

    private cardElement: cardStructure;
    private win: Sprite;
    private winScale: number;
    private winheight: number;
    private win_x: number;
    private winwidth: number;

    constructor() {
        this.initwinAssetload()
    }



    // win  Asset set the whenever event call
    private async initwinAssetload(): Promise<void> {
        this.cardElement = new cardStructure()
        const cardEle = this.cardElement.cardVariable()
        const winTexture = await WinTexture();
        this.win = new Sprite(winTexture);
        this.win.anchor.set(0.5);
        this.win.scale = 0;
        this.win.x = 610;
        this.win.y = 450;
        this.winwidth = innerWidth;
        const wincurrentwidth = this.win.width; ``
        this.winheight = innerHeight;
        const wincurrentheight = this.win.height
        this.win.x = (this.winwidth - wincurrentwidth) / 2 + this.win_x;
        this.win.y = (this.winheight - wincurrentheight) / 2;
        this.win.height = this.winheight;
        cardEle.Flip(this.win, this.winScale, 0.5)
        getStage().addChild(this.win);
    }


    public getwin() {
        return {
            win: this.win,
            winScale: this.winScale,
            winheight: this.winheight,
            win_x: this.win_x,
            initwinAssetload: this.initwinAssetload(),
        }
    }
    
}

