// const clickAudio = document.getElementById(`clickAudio`) as HTMLAudioElement;


export class SoundManager {
    static click = new Audio("assets/gameAudio/click-Sound.mp3")
    static flip = new Audio("assets/gameAudio/flip-Sound.wav");
    // static match = new Audio("assets/audio/match.mp3");
    static win = new Audio("assets/gameAudio/win-Sound.wav");

    static play(sound: HTMLAudioElement): void {
        sound.currentTime = 0;
        sound.play();
    }


    static stop(sound:HTMLAudioElement):void{
        sound.pause();
    }

}








