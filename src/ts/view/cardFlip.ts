console.log("Flip file loaded")

import { Sprite } from "pixi.js";
import { gsap } from "gsap/gsap-core";
import { cardStructure } from "./cardView";





// made the card function
export class animation extends cardStructure {

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


    async init(): Promise<void> {
        if (!this.backcard) console.error("backcard is not loaded");
        this.backcard.cursor = "pointer";
        this.backcard.eventMode = `static`;
        this.backcard.on('pointerdown', () => {
            this.flip(this.backcard, 0, () => {
                this.backcard = this.fontcard[3];
                this.flip(this.backcard, 0.8);
                console.log("load flip")
            });
        })
    }



}



















