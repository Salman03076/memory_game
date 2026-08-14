import { clickevent } from "../control/ClickEvent";
import { screenSize } from "./ScreenSize";



export class module {

    private cardVariable: Function;
    private winVariable: Function;

    constructor(getVariable: Function) {
        if (getVariable.name === 'getCard') {
            this.cardVariable = getVariable();
            new clickevent(this.cardVariable)
            new screenSize(this.cardVariable);
        } else if (getVariable.name === 'getwin') {
            this.winVariable = getVariable();
            new screenSize(this.winVariable);
        } else {
            console.log(" module fuction not get the getcard and getwin function")

        }

    }

}



