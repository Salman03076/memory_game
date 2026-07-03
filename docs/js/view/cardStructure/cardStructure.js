console.log("Cardstructure file loaded ");
import { Sprite, Texture } from "pixi.js";
import { containter1 } from "../stage/boxcard";
import { backCardTexture } from '../../model/Assets/Utily/utily';
// creta the card structure
export class cardStructure {
    backcard;
    fontcard;
    card = [];
    cardsLoaded;
    constructor() {
        this.cardsLoaded = this.createCards();
    }
    async createCards() {
        const rows = 2;
        const cols = 3;
        const cardnum = 6;
        for (let index = 0; index < cardnum; index++) {
            const row = Math.floor(index / cols);
            const col = index % cols;
            const texture = await backCardTexture();
            this.backcard = new Sprite(texture);
            this.backcard.anchor.set(0.5);
            this.backcard.scale.set(0.3);
            this.backcard.x = 100 + col * 300;
            this.backcard.y = 110 + row * 350;
            this.card.push(this.backcard);
            containter1.cardContainer.addChild(this.backcard);
        }
    }
}
;
//# sourceMappingURL=cardStructure.js.map