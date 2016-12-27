declare namespace UnityEngine {
  class AudioClip extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    LoadAudioData(): boolean;
    UnloadAudioData(): boolean;
    GetData(data: number[], offsetSamples: number): boolean;
    SetData(data: number[], offsetSamples: number): boolean;
    static Create(name: string, lengthSamples: number, channels: number, frequency: number, _3D: boolean, stream: boolean): UnityEngine.AudioClip;
    static Create(name: string, lengthSamples: number, channels: number, frequency: number, _3D: boolean, stream: boolean, pcmreadercallback: ((data: number[]) => void)): UnityEngine.AudioClip;
    static Create(name: string, lengthSamples: number, channels: number, frequency: number, _3D: boolean, stream: boolean, pcmreadercallback: ((data: number[]) => void), pcmsetpositioncallback: ((position: number) => void)): UnityEngine.AudioClip;
    static Create(name: string, lengthSamples: number, channels: number, frequency: number, stream: boolean): UnityEngine.AudioClip;
    static Create(name: string, lengthSamples: number, channels: number, frequency: number, stream: boolean, pcmreadercallback: ((data: number[]) => void)): UnityEngine.AudioClip;
    static Create(name: string, lengthSamples: number, channels: number, frequency: number, stream: boolean, pcmreadercallback: ((data: number[]) => void), pcmsetpositioncallback: ((position: number) => void)): UnityEngine.AudioClip;
    // properties
    readonly length: number;
    readonly samples: number;
    readonly channels: number;
    readonly frequency: number;
    readonly isReadyToPlay: boolean;
    readonly loadType: UnityEngine.AudioClipLoadType;
    readonly preloadAudioData: boolean;
    readonly loadState: UnityEngine.AudioDataLoadState;
    readonly loadInBackground: boolean;
    // fields
  }
}
