
import { Assets, Sprite, Texture } from 'pixi.js';



//asign the asset in Array
export const fontAsset: string[] = [
    "assets/font Card/image (55).png",
    "assets/font Card/image (13).png",
    "assets/font Card/image (15).png",
    "assets/font Card/image (20).png",
    "assets/font Card/image (25).png",
    "assets/font Card/image (30).png"

];





export const backgroundAsset = async (): Promise<Texture> => {
    return await Assets.load(`./Assets/background/background.avif`);
}

export const backCardTexture = async (): Promise<Texture> => {
    return await Assets.load(`./Assets/Back Card/BACK.png`);
}



