import { SoundManager } from "../audio";


export class clickevent {

    private card: Function;

    constructor(getcard: Function) {
        this.card = getcard;
        this.initClickEvent()
    }


    // set the click event
    private async initClickEvent(): Promise<void> {
        const variables = this.card();
        for (let count = 0; count < variables.cardnum; count++) {
            const currentStage = variables.currentcardstage[count];
            const card_font = variables.cardF[count].texture;
            const card_back = variables.cardB[count].texture;
            variables.cardBackTexture = card_back;
            currentStage.eventMode = `static`;
            currentStage.cursor = "pointer";
            currentStage.on("pointerdown", () => {
                currentStage.eventMode = "none"
                SoundManager.play(SoundManager.flip);
                console.log(currentStage.label)
                variables.Flip(currentStage, 0, 0.3, () => {
                    variables.isflip = currentStage.texture === card_back;
                    if (variables.isflip) {
                        currentStage.texture = card_font
                        variables.cardfirstSeccondstageStore(currentStage, card_font);
                    } else {
                        currentStage.texture = card_back
                    }
                    variables.Flip(currentStage, 0.3, 0.3)
                });
            });

        }
    }

}


