

import { background } from "./view/background";
import { cardStructure } from "./view/cardView";

import { wining } from "./view/Win";




//each file initialize
export const viewinit = async (): Promise<void> => {
    const bg = new background();
    addEventListener("initbackground", bg.initbackground.bind(bg) as EventListener);
    await bg.initbackground();
    addEventListener("backgroundResize", bg.backgroundResize.bind(bg) as EventListener);
    bg.backgroundResize();
    const card = new cardStructure();
    await card.initcard();
    await card.initfontcardload();
    await card.initArrayshuble();
    await card.initClickEvent();
    new wining();

};


