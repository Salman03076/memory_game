console.log('set up ready!');

import { application } from "./app";
import { viewinit } from "./mangame";

//All file initialiazation
(async () => {
    await application()
    viewinit();
})()



