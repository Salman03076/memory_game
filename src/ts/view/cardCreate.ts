console.log("Cardstructure file loaded ");
import { Assets, Container, Sprite, Texture, } from "pixi.js"
import { gsap } from "gsap/gsap-core";
import { backCardTexture, fontAsset } from '../utily'
import { getStage } from "..";
import { SoundManager } from "../audio";
import { WinTexture } from "../utily";





// const restart =document.getElementById("play") as HTMLButtonElement;




// creta the card structure
export class cardStructure {
    private backcard: Sprite;
    private fontcard: Sprite;
    private cardF: Sprite[] = [];
    public cardB: Sprite[] = [];
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
    private cardBackTexture: Texture | null = null;
    private MatchCard: number = 0;
    private win: Sprite;
    private winScale: number;
    private winheight: number;
    private win_x: number;
    private winwidth: number;




    // it is function thal help to card flip animation
    private flip(
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
        this.cardContainer.scale.x = 1.3;
        this.cardContainer.scale.y = 1.3;
        getStage().addChild(this.cardContainer);
        addEventListener('resize', this.resize.bind(this));
        addEventListener(`resize`, this.updateLayout.bind(this));
        this.resize();
        this.updateLayout()

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
        for (let count = 0; count < this.cardnum; count++) {
            const currentStage = this.currentcardstage[count];
            const card_font = this.cardF[count].texture;
            const card_back = this.cardB[count].texture;
            this.cardBackTexture = card_back;
            currentStage.eventMode = `static`;
            currentStage.cursor = "pointer";
            currentStage.on("pointerdown", () => {
                currentStage.eventMode = "none"
                SoundManager.play(SoundManager.flip);
                console.log(currentStage.label)
                this.flip(currentStage, 0, 0.3, () => {
                    this.isflip = currentStage.texture === card_back;
                    if (this.isflip) {
                        currentStage.texture = card_font
                        this.cardfirstSeccondstageStore(currentStage, card_font);
                    } else {
                        currentStage.texture = card_back
                    }
                    this.flip(currentStage, 0.3, 0.3);
                });
            });

        }
    }





    // control the cardContainer position
    private resize(): void {
        const availableWidth = innerWidth;
        const currentContainerWidth = this.cardContainer.width;
        const availableheight = innerHeight;
        const currrencontainerheight = this.cardContainer.height;
        this.cardContainer.x = (availableWidth - currentContainerWidth) / 2 - 6;
        this.cardContainer.y = (availableheight - currrencontainerheight) / 2;
    };





    // control  the clickEvent enable and disable
    public clickEventControl(str: boolean): void {
        if (str) {
            for (let enablenum = 0; enablenum < this.cardnum; enablenum++) {
                this.currentcardstage[enablenum].eventMode = "static";
            }
        } else {
            for (let disenablenum = 0; disenablenum < this.cardnum; disenablenum++) {
                this.currentcardstage[disenablenum].eventMode = "none";
            }
        }
    }

    public setClickEventsEnabled(enabled: boolean): void {
        this.clickEventControl(enabled);
    }


    // if  two card not Match start this animation
    private NotMatchCard(): void {
        this.clickEventControl(false);
        setTimeout(() => {
            this.flip(this.firstStage, 0, 0.3);
            this.flip(this.secondStage, 0, 0.3)
            this.ismatch = false;
        }, 1000);
        setTimeout(() => {
            this.clickEventControl(true)
            SoundManager.play(SoundManager.flip);
            this.flip(this.firstStage, 0.3, 0.3);
            this.flip(this.secondStage, 0.3, 0.3)
            if (!this.ismatch) {
                this.firstStage.texture = this.cardBackTexture;
                this.secondStage.texture = this.cardBackTexture;
                this.firstStage.eventMode = "none";
                this.secondStage.eventMode = "none";
            }
            this.firstStage.eventMode = "static"
            this.secondStage.eventMode = "static"
            this.firstStage = null;
            this.secondStage = null;
        }, 1300);

    }


    private cardfirstSeccondstageStore(currentStage: Sprite, card_font: Texture) {
        console.log(this.isflip);
        if (!this.firstStage) {
            currentStage.eventMode = `none`;
            this.firstStage = currentStage;
            this.firstCard = card_font.label;
            this.label1 = currentStage.label
            console.log(this.label1);
            console.log("firstStage 1");
        } else if (!this.secondStage) {
            currentStage.eventMode = `none`;
            this.secondStage = currentStage;
            this.secondCard = card_font.label;
            this.label2 = currentStage.label;
            console.log(this.label2)
            console.log("secondStage 2");
            void this.checkMatchacrd();
        }
    }


    // check the match card
    private async checkMatchacrd(): Promise<void> {
        if (this.firstStage && this.secondStage) {
            if (this.label1 !== this.label2) {
                this.firstStage.eventMode = `none`;
                if (this.firstCard === this.secondCard) {
                    this.firstStage.eventMode = "none"
                    this.secondStage.eventMode = "none"
                    this.firstStage.alpha = 0.8;
                    this.secondStage.alpha = 0.8;
                    ++this.MatchCard
                    this.checkwin()
                    this.ismatch = true
                    this.firstStage = null;
                    this.secondStage = null;
                } else {
                    console.log("it is not match card");
                    this.firstStage.eventMode = "none"
                    this.secondStage.eventMode = "none"
                    this.NotMatchCard()
                }
            }
        }

    }

    private async checkwin() {
        if (this.MatchCard === 6) {
            SoundManager.play(SoundManager.win);
            this.clickEventControl(false);
            this.initwinAssetload()
            console.log("WIN");
        }
    }





    //manage screen size
    private updateLayout(): void {
        const isMobile = window.innerWidth;
        switch (true) {

            case isMobile <= 320:
                this.cardContainer.scale.x = 0.4;
                this.cardContainer.scale.y = 0.4;
                break;

            case isMobile <= 375:
                this.winheight = 250;
                this.winScale = 0.3;
                this.cardContainer.scale.x = 0.4;
                this.cardContainer.scale.y = 0.4;
                break;

            case isMobile <= 425:
                this.win_x = -13;
                this.winheight = 250;
                this.winScale = 0.2;
                this.cardContainer.scale.x = 0.4;
                this.cardContainer.scale.y = 0.5;
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

            case isMobile <= 1440:
                this.cardContainer.scale.x = 0.7;
                this.cardContainer.scale.y = 0.8;
                break;

            default:
                this.cardContainer.scale.x = 1;
                this.cardContainer.scale.y = 0.9;
                this.winScale = 0.5
                console.log("Invalid ");
        }
    };



    // win  Asset set the whenever event call
    private async initwinAssetload(): Promise<void> {
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
        this.flip(this.win, this.winScale, 0.5)
        getStage().addChild(this.win);
    }

}






























