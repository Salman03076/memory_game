import { Sprite } from "pixi.js";
import { cardStructure } from "./cardView";
export declare class animation extends cardStructure {
    flip(backcard: Sprite, scaleTo: number, callback?: (() => void) | undefined): void;
    init(): Promise<void>;
}
//# sourceMappingURL=cardFlip.d.ts.map