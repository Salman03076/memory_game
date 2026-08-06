console.log("Cardstructure file loaded ");
import { Assets, Container, Sprite, Texture, } from "pixi.js"
import { gsap } from "gsap/gsap-core";
import { backCardTexture, fontAsset, WinTexture } from './utily'
import { getStage } from "..";
import { SoundManager } from "./Audio";





// const restart =document.getElementById("play") as HTMLButtonElement;




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
    private firstStage: Sprite | null = null;
    private secondStage: Sprite | null = null;
    private firstCard: string | null = null;
    private secondCard: string | null = null;
    private ismatch: boolean;
    private label1: string;
    private label2: string;
    private MatchCard: number = 0;
    private cardBackTexture: Texture | null = null;
    private win: Sprite;
    private winScale;
    private winheight;
    private win_x;


    // it is function thal help to card flip animation
    public flip(
        backcard: Sprite,
        scaleTo: number,
        duration?: number,
        callback: (() => void) | undefined = undefined
    ): void {
        gsap.to(backcard.scale, {
            x: scaleTo,
            duration: duration,
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
        addEventListener(`winimageresize`, this.initwinAssetload.bind(this));
        this.resize();
        window.addEventListener("resize", this.updateLayout.bind(this));
        this.updateLayout();

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
    }


    // array data shuffle
    async initArrayshuble(): Promise<void> {
        for (let i = this.cardF.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            // Swap
            [this.cardF[i], this.cardF[j]] = [this.cardF[j], this.cardF[i]];

        }
    }



    //  set the click event
    async initClickEvent(): Promise<void> {
        // Asign click event
        for (let count = 0; count < this.cardnum; count++) {
            let currentStage = this.currentcardstage[count];
            const card_font = await this.cardF[count].texture;
            const card_back = await this.cardB[count].texture;
            this.cardBackTexture = card_back;
            currentStage.eventMode = `static`;
            currentStage.cursor = "pointer";
            currentStage.on("pointerdown", () => {
                // SoundManager.play(SoundManager.click);
                SoundManager.play(SoundManager.flip);
                console.log(currentStage.label)
                this.flip(currentStage, 0, 0.3, () => {
                    this.isflip = currentStage.texture === card_back;
                    if (this.isflip) {
                        currentStage.texture = card_font
                        console.log(this.isflip);
                        if (!this.firstStage) {
                            this.firstStage = currentStage;
                            this.firstCard = card_font.label;
                            this.label1 = currentStage.label
                            console.log("firstStage 1");
                        } else if (!this.secondStage) {
                            this.secondStage = currentStage;
                            this.secondCard = card_font.label;
                            this.label2 = currentStage.label;
                            console.log("secondStage 2");
                            void this.checkMatchacrd();
                        }
                    } else {
                        currentStage.texture = card_back
                    }
                    this.flip(currentStage, 0.3, 0.3);
                });
            });

        }

        console.log(this.cardContainer.x)
    }




    // check the match card
    async checkMatchacrd(): Promise<void> {
        if (this.firstStage && this.secondStage) {
            if (this.label1 !== this.label2) {
                this.firstStage.eventMode = "none"
                if (this.firstCard === this.secondCard) {
                    this.firstStage.alpha = 0.8;
                    this.secondStage.alpha = 0.8;
                    ++this.MatchCard
                    console.log(this.MatchCard)
                    if (this.MatchCard == 6) {
                        SoundManager.play(SoundManager.win)
                        console.log("WIN");
                        this.initwinAssetload();
                        for (let disenablenum = 0; disenablenum < this.cardnum; disenablenum++) {
                            this.currentcardstage[disenablenum].eventMode = "none"
                        }
                    }
                    this.firstStage.eventMode = "none"
                    this.secondStage.eventMode = "none"
                    this.ismatch = true
                    this.firstStage = null;
                    this.secondStage = null;
                } else {
                    console.log("it is not match card");
                    this.firstStage.eventMode = "none"
                    this.secondStage.eventMode = "none"
                    for (let disenablenum = 0; disenablenum < this.cardnum; disenablenum++) {
                        this.currentcardstage[disenablenum].eventMode = "none"
                    }
                    setTimeout(() => {
                        this.flip(this.firstStage, 0, 0.3);
                        this.flip(this.secondStage, 0, 0.3)
                        this.ismatch = false;
                    }, 1000);
                    setTimeout(() => {
                        SoundManager.play(SoundManager.flip);
                        this.flip(this.firstStage, 0.3, 0.3);
                        this.flip(this.secondStage, 0.3, 0.3)
                        for (let enablenum = 0; enablenum < this.cardnum; enablenum++) {
                            this.currentcardstage[enablenum].eventMode = "static"
                        }
                        if (!this.ismatch) {
                            this.firstStage.texture = this.cardBackTexture;
                            this.secondStage.texture = this.cardBackTexture;
                        }
                        this.firstStage.eventMode = "static"
                        this.secondStage.eventMode = "static"
                        this.firstStage = null;
                        this.secondStage = null;
                    }, 1300);
                }
            }

        }

    }




    private resize(): void {
        const availableWidth = innerWidth;
        const currentContainerWidth = this.cardContainer.width;
        const availableheight = innerHeight;
        const currrencontainerheight = this.cardContainer.height;
        this.cardContainer.x = (availableWidth - currentContainerWidth) / 2 - 6;
        this.cardContainer.y = (availableheight - currrencontainerheight) / 2;
    }




    // win  Asset set the whenever event call
    private async initwinAssetload(): Promise<void> {
        const winTexture = await WinTexture();
        this.win = new Sprite(winTexture);
        this.win.anchor.set(0.5);
        this.win.scale = 0;
        this.win.x = 610;
        this.win.y = 450;
        const winwidth = innerWidth;
        const wincurrentwidth = this.win.width;
        const winheight = innerHeight;
        const wincurrentheight = this.win.height
        this.win.x = (winwidth - wincurrentwidth) / 2 + this.win_x;
        this.win.y = (winheight - wincurrentheight) / 2;

        this.win.height = this.winheight;
        this.flip(this.win, this.winScale, 0.5)
        getStage().addChild(this.win);
    }


    private updateLayout(): void {
        const isMobile = window.innerWidth;


        switch (true) {
            case isMobile <= 375:
                this.winheight = 250;
                this.winScale = 0.3;
                this.cardContainer.scale.x = 0.3;
                this.cardContainer.scale.y = 0.4;
                break;

            case isMobile <= 425:
                this.win_x = -13;
                this.winheight = 250;
                this.winScale = 0.2;
                this.cardContainer.scale.x = 0.3;
                this.cardContainer.scale.y = 0.4;
                break;

            case isMobile <= 768:
                this.winheight = 400;
                this.winScale = 0.3;
                this.cardContainer.scale.x = 0.5;
                this.cardContainer.scale.y = 0.6;
                break;

            case isMobile <= 1024:
                this.winheight = 400;
                this.winScale = 0.4;
                this.cardContainer.scale.x = 0.7;
                this.cardContainer.scale.y = 0.8;
                break;

            default:
                this.win_x = 20;
                this.winScale = 0.5
                console.log("Invalid Day");
        }


    }




}































