import { application } from "./stage/app";
import { background } from "./stage/background";
import { cardStructure } from "./cardStructure/cardStructure";
import { boxcard } from "./stage/boxcard";
// import { loadAsset } from './view/utily';
export const viewinit = async () => {
    await application();
    await new background().init();
    new boxcard();
    new cardStructure();
};
//# sourceMappingURL=initializationView.js.map