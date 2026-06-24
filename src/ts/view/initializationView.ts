
import { application } from './app';
import { cardStructure } from './cardStructure';
import { background } from './background';
// import { loadAsset } from './view/utily';


export const viewinit = () => {
    application();
   new cardStructure()
    new background().init();

}

