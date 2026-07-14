

import { background } from "./view/background";
import { cardStructure } from "./view/cardView";



//each file initialize
export const viewinit = async (): Promise<void> => {
    const cv = new cardStructure();
    await cv.initcard();
    const bg = new background();
    await bg.initbackground();
};


