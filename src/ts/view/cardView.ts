// console.log("Cardstructure file loaded ");

import { Assets, Container, Sprite, Texture, } from "pixi.js"
import { gsap } from "gsap/gsap-core";
import { backCardTexture, fontAsset } from './utily'
import { getStage } from "..";



// creta the card structure
export class cardStructure {
    private backcard: Sprite;
    private fontcard: Sprite;
    private cardF: Sprite[] = [];
    private cardB: Sprite[] = [];
    private currentcardstage: Sprite[] = [];
    private cols: number = 4;
    private cardnum: number = 12;
    private cardContainer: Container;
    private isflip: boolean;
    private secondcard: Sprite;
    private firstStage: Sprite | null = null;
    private secondStage: Sprite | null = null;
    private firstCard: string | null = null;
    private secondCard: string | null = null;
    private ismatch: boolean;


    public flip(
        backcard: Sprite,
        scaleTo: number,
        callback: (() => void) | undefined = undefined
    ): void {
        gsap.to(backcard.scale, {
            x: scaleTo,
            duration:0.3,
            onComplete: () => {
                callback?.();

            },
        });

    }





    // create the container
    constructor() {
        this.cardContainer = new Container();
        this.cardContainer.label = "CardContaienrs";
        this.cardContainer.x = 570;
        this.cardContainer.y = 70;
        getStage().addChild(this.cardContainer);
        addEventListener('resize', this.resize.bind(this));
        this.resize();
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
            this.backcard.x = 100 + col * 200;
            this.backcard.y = 110 + row * 300;
            this.cardB.push(this.backcard)
            this.currentcardstage.push(this.cardB[index]);
            this.currentcardstage[index].label = `card${index}`;
            this.cardContainer.addChild(this.currentcardstage[index]);
            this.resize();
        }

    }


    // initialize fontcard and load
    async initfontcardload(): Promise<void> {
        for (let i = 0; i < this.cardnum; i++) {
            const fontTexture = await Assets.load(fontAsset[i]);
            this.fontcard = new Sprite(fontTexture);
            this.fontcard.label = `frontCard_${i}`;
            this.cardF.push(this.fontcard);
        }

        console.log(this.cardF);

    }


    // array data shuffle
    async initArrayshuble(): Promise<void> {
        for (let i = this.cardF.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            // Swap
            [this.cardF[i], this.cardF[j]] = [this.cardF[j], this.cardF[i]];

        }
        console.log(this.cardF)
    }


     //  set the event  
    async initEvent(): Promise<void> {
        for (let count = 0; count < this.cardnum; count++) {
            let currentStage = this.currentcardstage[count];
            const card_font = await this.cardF[count].texture;
            const card_back = await this.cardB[count].texture;
            currentStage.eventMode = `static`;
            currentStage.cursor = "pointer";
            currentStage.on("pointerdown", () => {
                this.flip(currentStage, 0, () => {
                    this.isflip = currentStage.texture === card_back;

                    if (this.isflip) {

                        currentStage.texture = card_font
                        console.log(this.isflip);

                        if (!this.firstStage) {
                            this.firstStage = currentStage;
                            this.firstCard = card_font.label;
                            console.log("firstStage 1");
                        } else if (!this.secondcard) {
                            this.secondStage = currentStage;
                            this.secondCard = card_font.label;
                            console.log("secondStage 2");
                        }

                    } else {
                        currentStage.texture = card_back
                    }
                    this.flip(currentStage, 0.3);




                     // check the match card
                    if (this.firstStage && this.secondStage) {

                        if (this.firstCard) {
                            this.firstStage.eventMode = "none"
                        }

                        if (this.firstCard === this.secondCard) {
                            this.firstStage.eventMode = "none"
                            this.secondStage.eventMode = "none"
                            this.ismatch = true
                            this.firstStage = null;
                            this.secondStage = null;
                        } else {
                            console.log("it is not match card");
                            this.firstStage.eventMode = "none"
                            this.secondStage.eventMode = "none"
                            setTimeout(() => {
                                this.flip(this.firstStage, 0);
                                this.flip(this.secondStage, 0)
                                console.log(this.secondCard);
                                console.log(this.secondCard);
                                this.ismatch = false;
                            }, 1000);
                        }
                        setTimeout(() => {
                            this.flip(this.firstStage, 0.3);
                            this.flip(this.secondStage, 0.3)
                            if (!this.ismatch) {
                                this.firstStage.texture = card_back;
                                this.secondStage.texture = card_back;
                            }
                            this.firstStage.eventMode = "static"
                            this.secondStage.eventMode = "static"
                            this.firstStage = null;
                            this.secondStage = null;
                        }, 1300);
                    }
                });
            });
        }
    }

    private resize(): void {
        const availableWidth = innerWidth;
        const currentContainerWidth = this.cardContainer.width;
        this.cardContainer.x = (availableWidth - currentContainerWidth) / 2;


    }
}





























