

export class screenSize {



    constructor(getcard: Function) {
        this.updateLayout(getcard)
    }

    //manage screen size
    private updateLayout(getcard: Function): void {
        const winVariable = getcard();
        const isMobile = window.innerWidth;
        switch (true) {

            case isMobile <= 320:
                winVariable.cardContainer.scale.x = 0.4;
                winVariable.cardContainer.scale.y = 0.4;
                break;

            case isMobile <= 375:
                winVariable.winheight = 250;
                winVariable.winScale = 0.3;
                winVariable.cardContainer.scale.x = 0.4;
                winVariable.cardContainer.scale.y = 0.4;
                break;

            case isMobile <= 425:
                winVariable.win_x = -13;
                winVariable.winheight = 250;
                winVariable.winScale = 0.2;
                winVariable.cardContainer.scale.x = 0.4;
                winVariable.cardContainer.scale.y = 0.5;
                break;

            case isMobile <= 768:
                winVariable.winheight = 400;
                winVariable.winScale = 0.3;
                winVariable.cardContainer.scale.x = 0.5;
                winVariable.cardContainer.scale.y = 0.6;
                break;

            case isMobile <= 1024:
                winVariable.winheight = 400;
                winVariable.winScale = 0.4;
                winVariable.cardContainer.scale.x = 0.7;
                winVariable.cardContainer.scale.y = 0.8;
                break;

            case isMobile <= 1440:
                winVariable.cardContainer.scale.x = 0.7;
                winVariable.cardContainer.scale.y = 0.8;
                break;

            default:
                winVariable.cardContainer.scale.x = 1;
                winVariable.cardContainer.scale.y = 0.9;
                winVariable.winScale = 0.5
                console.log("Invalid ");
        }
    };


}