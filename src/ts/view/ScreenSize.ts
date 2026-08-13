import type { Container } from "pixi.js";
import { wining } from "./Win";

export class screenSize {

    private cardContainer: Container;
    private winElement: wining;

    constructor(container: Container) {
        this.winElement = new wining()

        this.updateLayout(container)
    }

    //manage screen size
    private updateLayout(container: Container): void {
        this.cardContainer = container;
        const winVariable = this.winElement.getwin();
        const isMobile = window.innerWidth;
        switch (true) {

            case isMobile <= 320:
                this.cardContainer.scale.x = 0.4;
                this.cardContainer.scale.y = 0.4;
                break;

            case isMobile <= 375:
                winVariable.winheight = 250;
                winVariable.winScale = 0.3;
                this.cardContainer.scale.x = 0.4;
                this.cardContainer.scale.y = 0.4;
                break;

            case isMobile <= 425:
                winVariable.win_x = -13;
                winVariable.winheight = 250;
                winVariable.winScale = 0.2;
                this.cardContainer.scale.x = 0.4;
                this.cardContainer.scale.y = 0.5;
                break;

            case isMobile <= 768:
                winVariable.winheight = 400;
                winVariable.winScale = 0.3;
                this.cardContainer.scale.x = 0.5;
                this.cardContainer.scale.y = 0.6;
                break;

            case isMobile <= 1024:
                winVariable.winheight = 400;
                winVariable.winScale = 0.4;
                this.cardContainer.scale.x = 0.7;
                this.cardContainer.scale.y = 0.8;
                break;

            case isMobile <= 1440:
                this.cardContainer.scale.x = 0.7;
                this.cardContainer.scale.y = 0.8;
                break;

            default:
                this.cardContainer.scale.x = 1;
                this.cardContainer.scale.y = 0.9;
                winVariable.winScale = 0.5
                console.log("Invalid Day");
        }
    };


}