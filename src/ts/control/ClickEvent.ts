import { SoundManager } from "../mode/Audio";
import { cardStructure } from "../view/cardCreate";


export class clickevent {

    private card: cardStructure;

    constructor() {
        this.card = new cardStructure();
        this.initClickEvent()
    }


    // set the click event
    private async initClickEvent(): Promise<void> {
        const variables = this.card.cardVariable();
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


