
import { Assets, Texture } from 'pixi.js';



//asign the asset in Array
export const fontAsset: string[] = [
    "Assets/image (0).png",
    "Assets/image (0).png",
    "Assets/image (1).png",
    "Assets/image (1).png",
    "Assets/image (2).png",
    "Assets/image (2).png",

];





export const backgroundAsset = async (): Promise<Texture> => {
    return await Assets.load(`Assets/background/background.avif`);
}

export const backCardTexture = async (): Promise<Texture> => {
    return await Assets.load(`Assets/Back Card/BACK.png`);
}



