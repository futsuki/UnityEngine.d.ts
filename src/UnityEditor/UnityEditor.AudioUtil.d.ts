declare namespace UnityEditor {
  class AudioUtil extends System.Object {
    // constructors
    constructor();
    // methods
    static PlayClip(clip: any, startSample: number, loop: boolean): void;
    static PlayClip(clip: any, startSample: number): void;
    static PlayClip(clip: any): void;
    static StopClip(clip: any): void;
    static PauseClip(clip: any): void;
    static ResumeClip(clip: any): void;
    static LoopClip(clip: any, on: boolean): void;
    static IsClipPlaying(clip: any): boolean;
    static StopAllClips(): void;
    static GetClipPosition(clip: any): number;
    static GetClipSamplePosition(clip: any): number;
    static SetClipSamplePosition(clip: any, iSamplePosition: number): void;
    static GetSampleCount(clip: any): number;
    static GetChannelCount(clip: any): number;
    static GetBitRate(clip: any): number;
    static GetBitsPerSample(clip: any): number;
    static GetFrequency(clip: any): number;
    static GetSoundSize(clip: any): number;
    static GetSoundCompressionFormat(clip: any): any;
    static GetTargetPlatformSoundCompressionFormat(clip: any): any;
    static GetCurrentSpatializerEffectName(): string;
    static GetSpatializerPluginNames(): string[];
    static SetSpatializerPluginName(pluginName: string): void;
    static HasPreview(clip: any): boolean;
    static GetImporterFromClip(clip: any): UnityEditor.AudioImporter;
    static GetMinMaxData(importer: UnityEditor.AudioImporter): number[];
    static GetDuration(clip: any): number;
    static GetFMODMemoryAllocated(): number;
    static GetFMODCPUUsage(): number;
    static IsMovieAudio(clip: any): boolean;
    static IsTrackerFile(clip: any): boolean;
    static GetMusicChannelCount(clip: any): number;
    static GetLowpassCurve(lowPassFilter: any): any;
    static GetListenerPos(): any;
    static UpdateAudio(): void;
    static SetListenerTransform(t: any): void;
    static HaveAudioCallback(behaviour: any): boolean;
    static GetCustomFilterChannelCount(behaviour: any): number;
    static GetCustomFilterProcessTime(behaviour: any): number;
    static GetCustomFilterMaxIn(behaviour: any, channel: number): number;
    static GetCustomFilterMaxOut(behaviour: any, channel: number): number;
    // properties
    static resetAllAudioClipPlayCountsOnPlay: boolean;
    static readonly canUseSpatializerEffect: boolean;
    // fields
  }
}
