
import { Container,Graphics } from "pixi.js";
import { app } from "./app";


//create the container use by graphica
  export class boxcard {

    public cardContainer: any;

    constructor() {
        this.cardContainer = new Container();
        this.cardContainer.zIndex = 10;
        this.cardContainer.scale.set(1.0);
        this.cardContainer.x = 543.5;
        this.cardContainer.y = 183.5;
        app.stage.addChild(this.cardContainer);

    }

}
 
  export const containter1 = new boxcard();

  

