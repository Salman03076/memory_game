
import { Sprite } from "pixi.js";
import { gsap } from "gsap/gsap-core";


// made the card function
export class flipCardActive {

    public flip(
        cardB: Sprite,
        scaleTo: number,
        callback = undefined
    ): void {
        gsap.to(cardB.scale, {
            x: scaleTo,
            onComplete() {
                callback?.();
            },
        });

    }


}

export const cardAnimation = new flipCardActive();




