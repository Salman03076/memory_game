import { Application, Assets, Container, Sprite, Graphics } from "pixi.js";
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

    // create the game center body

    class Card {
        cardcontainer;
        backcard;
        fontcard;
        sprite;

        constructor() {
            this.cardcontainer = new Graphics();
            this.cardcontainer.lineStyle(2, 0xff0000, 1);
            this.cardcontainer.drawRect(0, 0, 200, 200);
            this.cardcontainer.zIndex = 10;

            app.stage.addChild(this.cardcontainer);
        }

        async init() {
            this.backcard = await Assets.load("Assets/image (10).png");
            this.fontcard = await Assets.load("Assets/image (0).png");
            // create the card body
            for (let index = 0; index < 6; index++) {
                const card = new Sprite(this.backcard);
                card.label = `card${index}`;
                card.scale.set(0.8);
                card.x = 100 + index * 500;
                card.y = 50;
                this.cardcontainer.addChild(card);
                // app.stage.addChild(card0);
            }
            // cardcontainer.addchild(card0);
            this.sprite = new Sprite(this.backcard);
            this.sprite.x = 600;
            this.sprite.y = 500;
            this.sprite.scale.set(0.8, 0.8);
            this.sprite.anchor.set(0.5);




            let activeEvent = true;
            this.sprite.eventMode = `static`;
            this.sprite.on('pointerdown', () => {
                flipcall()
            });
            //     
            // activeEvent = !activeEvent;


            const flipCard = (sprite, scaleTo, callback = undefined) => {
                gsap.to(sprite.scale, {
                    x: scaleTo,
                    onComplete() {
                        callback?.();
                    },
                });
            }
            function flipcall() {
                flipCard(this.sprite, 0, () => {
                    this.sprite.texture = this.fontcard;
                    flipCard(this.sprite, 0.8);
                })

            }


            app.stage.addChild(this.sprite);
        }

    }

    const card1 = new Card();
    await card1.init();









};