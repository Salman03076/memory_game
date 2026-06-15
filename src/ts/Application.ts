import { Application, Assets, Container, Sprite, Graphics, Texture } from "pixi.js";
import { gsap } from "gsap";


export const application = async () => {


    const app = new Application();
    await app.init({ background: 'black', resizeTo: window });
    globalThis.__PIXI_APP__ = app;

    const gamebody = document.getElementById('gamebody');

    gamebody?.appendChild(app.canvas);

    // assign the game background
    class board {
        texture;
        background;
        constructor() {
        }
        async init() {
            this.texture = await Assets.load("Assets/Background.jpg");
            this.background = new Sprite(this.texture);
            this.background.width = app.screen.width;
            this.background.height = app.screen.height;
            app.stage.addChild(this.background);
        }
    }

    const gameBoard = new board();
    await gameBoard.init();


    // create the card center body
    class boxcard {
        protected cardContainer: any;

        constructor() {
            this.cardContainer = new Graphics();
            this.cardContainer.lineStyle(2, 0xff0000, 1);
            this.cardContainer.drawRect(0, 0, 500, 500);
            this.cardContainer.zIndex = 10;
            this.cardContainer.scale.set(1.1);
            this.cardContainer.x = 869;
            this.cardContainer.y = 408;

            app.stage.addChild(this.cardContainer);
        }

    }

    const Card1 = new boxcard();
    Card1



    // creta the card structure
    class cardstructure extends boxcard {

        backcard: Texture;
        fontcard: Texture;
        cardB;

        constructor() {
            super();

        }

        async init() {

            const fontAsset: any = [
                "Assets/image (0).png",
                "Assets/image (1).png",
                "Assets/image (2).png",
                "Assets/image (3).png",
                "Assets/image (4).png",
                "Assets/image (5).png",


            ];

            this.backcard = await Assets.load("Assets/image (10).png");
            const cardF = new Sprite(this.backcard);
            // create the card
            const rows = 2;
            const cols = 3;

            for (let index = 0; index < 6; index++) {
                this.fontcard = await Assets.load(fontAsset);

                const row = Math.floor(index / cols);
                const col = index % cols;

                this.cardB = new Sprite(this.backcard);
                this.cardB.anchor = 0.5;

                this.cardB.scale.set(0.6);

                this.cardB.x = 50 + col * 400; // Horizontal spacing
                this.cardB.y = 50 + row * 450;  // Vertical spacing             
                this.cardContainer.addChild(this.cardB);
            }





        }
    };



    const initializingCard = new cardstructure();
    await initializingCard.init();








    // made the card function
    class flipcardActive extends cardstructure {
        flip;
        // sprite;

        constructor() {
            super()

            let cardsprite = this.cardB;

            this.flip = (cardsprite, scaleTo, callback = undefined) => {
                gsap.to(cardsprite.scale, {
                    x: scaleTo,
                    onComplete() {
                        callback?.();
                    },
                });


                this.cardB.eventMode = `static`;
                this.cardB.on('pointerdown', () => {
                    this.flip(this.cardB, 0, () => {
                        this.cardB.texture = this.fontcard;
                        this.flip(this.cardB, 0.8);
                    })


                });

                this.cardB = new Sprite(this.backcard);
                this.cardB.x = 600;
                this.cardB.y = 500;
                this.cardB.scale.set(0.8, 0.8);
                this.cardB.anchor.set(0.5);
                app.stage.addChild(this.cardB);
            }

        }
    }
    const fliptrue = new flipcardActive();
    await fliptrue.init();

}
