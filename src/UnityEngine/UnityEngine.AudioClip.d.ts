declare namespace UnityEngine {
  class AudioClip {
    // constructors
    constructor();
    // methods
    LoadAudioData(): boolean;
    UnloadAudioData(): boolean;
    GetData(data: number[], offsetSamples: number): boolean;
    SetData(data: number[], offsetSamples: number): boolean;
    static Create(name: string, lengthSamples: number, channels: number, frequency: number, _3D: boolean, stream: boolean): UnityEngine.AudioClip;
    static Create(name: string, lengthSamples: number, channels: number, frequency: number, _3D: boolean, stream: boolean, pcmreadercallback: UnityEngine.AudioClip.PCMReaderCallback): UnityEngine.AudioClip;
    static Create(name: string, lengthSamples: number, channels: number, frequency: number, _3D: boolean, stream: boolean, pcmreadercallback: UnityEngine.AudioClip.PCMReaderCallback, pcmsetpositioncallback: UnityEngine.AudioClip.PCMSetPositionCallback): UnityEngine.AudioClip;
    static Create(name: string, lengthSamples: number, channels: number, frequency: number, stream: boolean): UnityEngine.AudioClip;
    static Create(name: string, lengthSamples: number, channels: number, frequency: number, stream: boolean, pcmreadercallback: UnityEngine.AudioClip.PCMReaderCallback): UnityEngine.AudioClip;
    static Create(name: string, lengthSamples: number, channels: number, frequency: number, stream: boolean, pcmreadercallback: UnityEngine.AudioClip.PCMReaderCallback, pcmsetpositioncallback: UnityEngine.AudioClip.PCMSetPositionCallback): UnityEngine.AudioClip;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
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
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
