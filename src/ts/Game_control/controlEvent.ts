//set the event on the card
import { cardbackimgae } from "../view/cardStructure";
import { cardAnimation } from "./controlAnimation";



//control envents
cardbackimgae.cardB.eventMode = `static`;
cardbackimgae.cardB.cursor = "pointer";
cardbackimgae.cardB.on('pointerdown', () => {
    cardAnimation.flip(cardbackimgae.cardB, 0, () => {
        cardbackimgae.cardB = cardbackimgae.fontcard[3];
        cardAnimation.flip(cardbackimgae.cardB, 0.8);
    });
})