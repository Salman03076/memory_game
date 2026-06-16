
import { Sprite } from "pixi.js";
import { cardstructure } from "./card";
import { gsap } from "gsap/gsap-core";




//made the card function

export class flipcardActive extends cardstructure {
    protected flip: any;
    // sprite;

    constructor() {
        super()

        let sprite: Sprite = this.cardB;

        this.cardB = (sprite, scaleTo, callback = undefined) => {
            gsap.to(sprite.scale, {
                x: scaleTo,
                onComplete() {
                    callback?.();
                },
            });

        }

        sprite.eventMode = `static`;
        sprite.interactive = true;
        sprite.cursor = "pointer"
        sprite.on('pointerdown', () => {
            console.log("check")
            this.flip(sprite, 0, () => {
                this.cardB = this.fontcard;
                this.flip(this.cardB, 0.8);
            })


        });

    }
}
