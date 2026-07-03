console.log("Cardstructure file loaded ");

import { Sprite, Texture } from "pixi.js"
import { boxcard } from "./background";

import { backCardTexture } from './utily'



// creta the card structure

export class cardStructure extends boxcard {
    public backcard: Sprite;
    public fontcard: Texture;
     public card:Sprite[]=[]

    constructor() {
 super()
        // create  the colums and rows
        let rows: number = 2;
        let cols: number = 3;
        let cardnum: number = 6;
        


        // create the muliple card
        for (let index = 0; index < cardnum; index++) {


            (async (): Promise<void> => {
                // this.fontcard = await Assets.load(await fontAsset[index]);
                const row = Math.floor(index / cols);
                const col = index % cols;
                const texture: Texture = await backCardTexture()
                this.backcard = new Sprite(texture);
                this.backcard.anchor.set(0.5);
                this.backcard.scale.set(0.3);
                this.backcard.x = 100 + col * 300;
                this.backcard.y = 110 + row * 350;
                this.card.push(this.backcard)
                this.cardContainer.addChild(this.backcard);

               


            })()


        }

    }



};




