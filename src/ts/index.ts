console.log('set up ready!');

import type { Container, ContainerChild } from "pixi.js";
import { application } from "./app";
import { viewinit } from "./manage_game";

let stage: Container<ContainerChild>;

//All file initialiazation
(async () => {
    stage = await application();
    await viewinit();
})();


export const getStage = () => {
    return stage;
};




