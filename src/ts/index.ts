console.log('set up ready!');

import { application } from "./app";
import { viewinit } from "./mangame";

let stage;

//All file initialiazation
(async () => {
    stage = await application();
    await viewinit();
})();


export const getStage = () => {
    return stage;
};


