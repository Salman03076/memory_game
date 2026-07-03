
import { background } from "./view/background";

import { cardStructure } from "./view/cardView";
import { application } from "./app";
import { animation } from "./view/cardFlip";


//each file initialize
export const viewinit = async (): Promise<void> => {
    await application()
    await new background().init();
    new cardStructure();
    await new animation()
}


