import { Sprite, Texture, Assets } from "pixi.js"
import { boxcard } from "./createUI";
import { fontAsset, backCardTexture } from './utily'


// creta the card structure

export class cardStructure extends boxcard {
    public backcard: Texture;
    protected fontcard: Texture;
    public cardB: any;

    constructor() {

        super(); //call the present class



        // create  the colums and rows
        let rows: number = 2;
        let cols: number = 3;
        let cardnum: number = 6;


        // create the muliple card
        for (let index = 0; index < cardnum; index++) {


            (async () => {

                this.fontcard = await Assets.load(await fontAsset[index]);
                const row = Math.floor(index / cols);
                const col = index % cols;
                this.cardB = new Sprite(await backCardTexture());
                this.cardB.anchor.set(0.5);
                this.cardB.scale.set(0.3);
                this.cardB.x = 100 + col * 300;
                this.cardB.y = 110 + row * 350;
                this.cardContainer.addChild(this.cardB);
            })()


        }

    }



};

export const cardbackimgae = new cardStructure();




