declare namespace UnityEngine {
  class MovieTexture extends UnityEngine.Texture {
    // constructors
    constructor();
    // methods
    Play(): void;
    Stop(): void;
    Pause(): void;
    // properties
    readonly audioClip: UnityEngine.AudioClip;
    loop: boolean;
    readonly isPlaying: boolean;
    readonly isReadyToPlay: boolean;
    readonly duration: number;
    // fields
  }
}
