// console.log("Cardstructure file loaded ");

import { Assets, Container, Sprite, Texture, } from "pixi.js"
import { gsap } from "gsap/gsap-core";
import { backCardTexture, fontAsset } from './utily'
import { getStage } from "..";
import { application } from "../app";



// creta the card structure
export class cardStructure {
    private backcard: Sprite;
    private fontcard: Sprite;
    private cardF: Sprite[] = [];
    private cardB: Sprite[] = [];
    private currentcardstage: Sprite[] = [];
    private cols: number = 3;
    private cardnum: number = 6;
    private cardContainer: Container;
    private isflip: boolean;
    private shuffleArray: Function;

    public flip(
        backcard: Sprite,
        scaleTo: number,
        callback: (() => void) | undefined = undefined
    ): void {
        gsap.to(backcard.scale, {
            x: scaleTo,
            onComplete: () => {
                callback?.();
            },
        });

    }





    // create the container
    constructor() {
        this.cardContainer = new Container();
        this.cardContainer.label = "CardContaienrs";
        this.cardContainer.x = 610;
        this.cardContainer.y = 210;
        getStage().addChild(this.cardContainer);
    };


    //initailixe backcard  and load
    async initcard(): Promise<void> {
        for (let index = 0; index < this.cardnum; index++) {
            const row = Math.floor(index / this.cols);
            const col = index % this.cols;
            const texture: Texture = await backCardTexture()
            this.backcard = new Sprite(texture);
            this.backcard.anchor.set(0.5);
            this.backcard.scale.set(0.3);
            this.backcard.x = 100 + col * 300;
            this.backcard.y = 110 + row * 350;
            this.cardB.push(this.backcard)
            this.currentcardstage.push(this.cardB[index]);
            this.currentcardstage[index].label = `card${index}`;
            this.cardContainer.addChild(this.currentcardstage[index]);
        }



        // initialize fontcard and load

        for (let i = 0; i < this.cardnum; i++) {
            const fontTexture = await Assets.load(fontAsset[i]);
            this.fontcard = new Sprite(fontTexture);
            this.fontcard.label = `frontCard_${i}`;
            this.cardF.push(this.fontcard);
        }

        console.log(this.cardF);



        // array data shuffle
        for (let i = this.cardF.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            // Swap
            [this.cardF[i], this.cardF[j]] = [this.cardF[j], this.cardF[i]];

        }

        console.log(this.cardF)
        // 





        // set event flip  function
        for (let count = 0; count < this.cardnum; count++) {
            const currentStage = this.currentcardstage[count];
            const card_font = this.cardF[count].texture;
            const card_back = this.cardB[count].texture;
            currentStage.eventMode = `static`;
            currentStage.cursor = "pointer";
            currentStage.on('pointerdown', () => {
                this.flip(
                    currentStage,
                    0,
                    () => {
                        this.isflip = !this.isflip;
                        if (this.isflip) {
                            currentStage.texture = card_font;
                        } else {
                            currentStage.texture = card_back;
                        }
                        this.flip(currentStage, 0.3)
                        console.log(`load flip${count}`)
                    });
            });
        }
    }
}





























