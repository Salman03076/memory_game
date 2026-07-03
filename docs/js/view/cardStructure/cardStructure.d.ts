import { Sprite, Texture } from "pixi.js";
export declare class cardStructure {
    backcard: Sprite;
    fontcard: Texture;
    card: Sprite[];
    readonly cardsLoaded: Promise<void>;
    constructor();
    private createCards;
}
//# sourceMappingURL=cardStructure.d.ts.map