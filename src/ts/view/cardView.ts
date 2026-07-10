console.log("Cardstructure file loaded ");

import { Assets, Sprite, Texture, } from "pixi.js"
import { background } from "./background";
import { gsap } from "gsap/gsap-core";




import { backCardTexture, fontAsset } from './utily'



// creta the card structure

export class cardStructure extends background {
    private backcard: Sprite;
    private fontcard: Sprite;
    private cardF: Sprite[] = [];
    private cardB: Sprite[] = [];
    private rows: number = 2;
    private cols: number = 3;
    private cardnum: number = 6;



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



    constructor() {
        super()
        this.initcard();

    };



    async initcard(): Promise<void> {
        for (let index = 0; index < this.cardnum; index++) {
            const row = Math.floor(index / this.cols);
            const col = index % this.cols;
            const texture: Texture = await backCardTexture()
            const fontTexture = await Assets.load(fontAsset[index]);
            this.fontcard = new Sprite(fontTexture);
            this.backcard = new Sprite(texture);
            this.backcard.anchor.set(0.5);
            this.backcard.scale.set(0.3);
            this.backcard.x = 100 + col * 300;
            this.backcard.y = 110 + row * 350;
            this.cardB.push(this.backcard)
            this.cardF.push(this.fontcard)
            this.cardB[index].label = `card${index}`;
            this.cardContainer.addChild(this.cardB[index]);


            // flip function
            if (!this.cardB[index]) console.error("backcard is not loaded");
            this.cardB[index].cursor = "pointer";
            this.cardB[index].eventMode = `static`;
            this.cardB[index].on('pointerdown', () => {

                this.flip(this.cardB[index], 0, () => {
                    let changeAset = false;
                    if (!changeAset) {
                        changeAset = true;
                        this.cardB[index].texture = this.cardF[Math.floor(Math.random() * index)].texture;
                    } else {
                        this.cardB[index].texture = this.backcard.texture;
                    }
                    this.flip(this.cardB[index], 0.3);
                    console.log(`load flip${index}`)
                });
            }


            )


        }
    }













}



























