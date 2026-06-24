
import { Sprite } from "pixi.js";
import { cardStructure } from "./card";
import { gsap } from "gsap/gsap-core";

// made the card function
export class flipCardActive extends cardStructure {
    protected flip: any;

    constructor() {
        super();
    }

    async init(): Promise<void> {

        const sprite = this.cardB;
        if (!sprite) {
            return;
        }

        // control the card scale
        this.flip = (cardB: Sprite, scaleTo: number, callback = undefined) => {
            gsap.to(cardB.scale, {
                x: scaleTo,
                onComplete() {
                    callback?.();
                },
            });
        }


        //set the event on the card
        this.cardB.eventMode = `static`;
        this.cardB.interactive = true;
        this.cardB.cursor = "pointer";
        this.cardB.on('pointerdown', () => {
            console.log("check");
            this.flip(sprite, 0, () => {
                this.cardB = this.fontcard as unknown as Sprite;
                this.flip(this.cardB, 0.8);
            });
        });

        
        const instance = new flipCardActive();
        instance.init();
    }}



