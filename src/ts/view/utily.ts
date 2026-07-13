
import { Assets, Sprite, Texture } from 'pixi.js';



//asign the asset in Array
export const fontAsset: string[] = [
    "assets/fontCard/image (55).png",
    "assets/fontCard/image (13).png",
    "assets/fontCard/image (15).png",
    "assets/fontCard/image (20).png",
    "assets/fontCard/image (25).png",
    "assets/fontCard/image (30).png"

];





export const backgroundAsset = async (): Promise<Texture> => {
    return await Assets.load(`./Assets/background/background.avif`);
}

export const backCardTexture = async (): Promise<Texture> => {
    return await Assets.load(`./Assets/BackCard/BACK.png`);
}



