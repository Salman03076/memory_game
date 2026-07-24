

import { background } from "./view/background";
import { cardStructure } from "./view/cardView";



//each file initialize
export const viewinit = async (): Promise<void> => {
    await new background().initbackground();
    await new cardStructure().initcard();
    
};


