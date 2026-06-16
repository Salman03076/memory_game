import { Sprite, Texture, Assets } from "pixi.js"
import { boxcard } from "./createUI";
import { fontAsset } from './utily'

// creta the card structure
export class cardstructure extends boxcard {

    protected backcard: Texture;
    protected fontcard: Texture;
    protected cardB: any;

    constructor() {
        super();






        // create the card
        let rows: number = 2;
        let cols: number = 3;
        let cardnum: number = 6;

        for (let index = 0; index < cardnum; index++) {

            {
                async () => {
                    this.fontcard = await Assets.load(fontAsset[index]);
                }
            }
            // this.cardB.label ="cardB"


            const row = Math.floor(index / cols);
            const col = index % cols;

            this.cardB = new Sprite(this.backcard);
            this.cardB.anchor.set(0.5);
            this.cardB.scale.set(0.3);

            this.cardB.x = 100 + col * 300;
            this.cardB.y = 110 + row * 350;
            this.cardContainer.addChild(this.cardB);
        }

    }



};

const initializingCard = new cardstructure();
