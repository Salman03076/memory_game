

import { background } from "./view/background";
import { cardStructure } from "./view/cardView";



//each file initialize
export const viewinit = async (): Promise<void> => {
    const bg = new background();
    await bg.initbackground()
    const card = new cardStructure();
    await card.initcard();
    await card.initfontcardload();
    await card.initArrayshuble();
    await card.initClickEvent();    
};


