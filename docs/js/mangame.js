import { background, boxcard } from "./view/background";
import { cardStructure } from "./view/cardView";
import { application } from "./app";
import { animation } from "./view/cardFlip";
// import { loadAsset } from './view/utily';
export const viewinit = async () => {
    await application();
    await new background().init();
    new boxcard();
    new cardStructure();
    await new animation();
};
//# sourceMappingURL=mangame.js.map