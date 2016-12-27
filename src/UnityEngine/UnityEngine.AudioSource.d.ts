declare namespace UnityEngine {
  class AudioSource extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    Play(delay: number): void;
    Play(): void;
    PlayDelayed(delay: number): void;
    PlayScheduled(time: number): void;
    SetScheduledStartTime(time: number): void;
    SetScheduledEndTime(time: number): void;
    Stop(): void;
    Pause(): void;
    UnPause(): void;
    PlayOneShot(clip: UnityEngine.AudioClip, volumeScale: number): void;
    PlayOneShot(clip: UnityEngine.AudioClip): void;
    static PlayClipAtPoint(clip: UnityEngine.AudioClip, position: UnityEngine.Vector3): void;
    static PlayClipAtPoint(clip: UnityEngine.AudioClip, position: UnityEngine.Vector3, volume: number): void;
    SetCustomCurve(type: UnityEngine.AudioSourceCurveType, curve: UnityEngine.AnimationCurve): void;
    GetCustomCurve(type: UnityEngine.AudioSourceCurveType): UnityEngine.AnimationCurve;
    GetOutputData(numSamples: number, channel: number): number[];
    GetOutputData(samples: number[], channel: number): void;
    GetSpectrumData(numSamples: number, channel: number, window: UnityEngine.FFTWindow): number[];
    GetSpectrumData(samples: number[], channel: number, window: UnityEngine.FFTWindow): void;
    SetSpatializerFloat(index: number, value: number): boolean;
    GetSpatializerFloat(index: number, value: any): boolean;
    // properties
    volume: number;
    pitch: number;
    time: number;
    timeSamples: number;
    clip: UnityEngine.AudioClip;
    outputAudioMixerGroup: UnityEngine.Audio.AudioMixerGroup;
    readonly isPlaying: boolean;
    readonly isVirtual: boolean;
    loop: boolean;
    ignoreListenerVolume: boolean;
    playOnAwake: boolean;
    ignoreListenerPause: boolean;
    velocityUpdateMode: UnityEngine.AudioVelocityUpdateMode;
    panStereo: number;
    spatialBlend: number;
    spatialize: boolean;
    spatializePostEffects: boolean;
    reverbZoneMix: number;
    bypassEffects: boolean;
    bypassListenerEffects: boolean;
    bypassReverbZones: boolean;
    dopplerLevel: number;
    spread: number;
    priority: number;
    mute: boolean;
    minDistance: number;
    maxDistance: number;
    rolloffMode: UnityEngine.AudioRolloffMode;
    minVolume: number;
    maxVolume: number;
    rolloffFactor: number;
    panLevel: number;
    pan: number;
    // fields
  }
}
