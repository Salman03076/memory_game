import { Assets, Texture } from 'pixi.js';
//asign the asset in Array
export const fontAsset = [
    "Assets/image (0).png",
    "Assets/image (0).png",
    "Assets/image (1).png",
    "Assets/image (1).png",
    "Assets/image (2).png",
    "Assets/image (2).png",
];
export const backgroundAsset = async () => {
    return await Assets.load(`./Assets/background/background.avif`);
};
export const backCardTexture = async () => {
    return await Assets.load(`./Assets/Back Card/BACK.png`);
};
//# sourceMappingURL=utily.js.map