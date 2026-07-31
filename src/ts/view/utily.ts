
import { Assets, Texture } from 'pixi.js';


export const assetsMap = {};


//asign the asset in Array
export const fontAsset: string[] = [
    "assets/fontCard/image (55).png",
    "assets/fontCard/image (55).png",
    "assets/fontCard/image (13).png",
    "assets/fontCard/image (13).png",
    "assets/fontCard/image (15).png",
    "assets/fontCard/image (15).png",
    "assets/fontCard/image (50).png",
    "assets/fontCard/image (50).png",
    "assets/fontCard/image (30).png",
    "assets/fontCard/image (30).png",
    "assets/fontCard/image (66).png",
    "assets/fontCard/image (66).png",
];





export const backgroundAsset = async (): Promise<Texture> => {
    return await loadTexture('background', `assets/background/bg1.png`);
}

export const backCardTexture = async (): Promise<Texture> => {
    return await loadTexture('cardBack', `assets/BackCard/BACK.png`);
}

export const WinTemple = async (): Promise<Texture> => {
    return await loadTexture(`win`, `assets/background/You win.png`)
}

const loadTexture = async (textureName: string, textureURL: string) => {
    if (!assetsMap[`${textureName}`]) {
        assetsMap[`${textureName}`] = await Assets.load(textureURL);
    }

    return assetsMap[`${textureName}`];
};
