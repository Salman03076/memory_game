console.log("CardEventhandle file loaded");
//set the event on the card
import { animation } from "../../view/cardAnimation/cardAnimate";
import { cardStructure } from "../../view/cardStructure/cardStructure";
const animate = new animation();
//control events
export class eventhandle extends cardStructure {
    constructor() {
        super();
        this.initEvents();
    }
    initEvents() {
        this.cardsLoaded
            .then(() => {
            if (this.card.length === 0) {
                console.error("backcard is not loaded");
                return;
            }
            this.card.forEach((card) => {
                card.cursor = "pointer";
                card.eventMode = "static";
                card.on('pointerdown', () => {
                    animate.flip(card, 0, () => {
                        console.log("load flip");
                    });
                });
            });
        })
            .catch((error) => {
            console.error("backcard failed to load", error);
        });
    }
}
//# sourceMappingURL=controlAnimationEvent.js.map