// const clickAudio = document.getElementById(`clickAudio`) as HTMLAudioElement;


export class SoundManager {
    static click = new Audio("/assets/cardClickAudiocomputer-mouse-click.mp3")
    static flip = new Audio("assets/audio/flip.mp3");
    static match = new Audio("assets/audio/match.mp3");
    static win = new Audio("assets/audio/win.mp3");

    static play(sound: HTMLAudioElement): void {
        sound.currentTime = 10;
        sound.play();
    }
}








