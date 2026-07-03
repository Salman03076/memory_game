console.log("Flip file loaded");
import { Sprite } from "pixi.js";
import { gsap } from "gsap/gsap-core";
// made the card function
export class animation {
    flip(backcard, scaleTo, callback = undefined) {
        gsap.to(backcard.scale, {
            x: scaleTo,
            onComplete: () => {
                callback?.();
            },
        });
    }
}
//# sourceMappingURL=cardAnimate.js.map