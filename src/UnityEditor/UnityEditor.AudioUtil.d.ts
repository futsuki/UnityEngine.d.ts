declare namespace UnityEditor {
  class AudioUtil {
    // constructors
    constructor();
    // methods
    static PlayClip(clip: any, startSample: number, loop: boolean): any;
    static PlayClip(clip: any, startSample: number): any;
    static PlayClip(clip: any): any;
    static StopClip(clip: any): any;
    static PauseClip(clip: any): any;
    static ResumeClip(clip: any): any;
    static LoopClip(clip: any, on: boolean): any;
    static IsClipPlaying(clip: any): boolean;
    static StopAllClips(): any;
    static GetClipPosition(clip: any): number;
    static GetClipSamplePosition(clip: any): number;
    static SetClipSamplePosition(clip: any, iSamplePosition: number): any;
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
    static SetSpatializerPluginName(pluginName: string): any;
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
    static UpdateAudio(): any;
    static SetListenerTransform(t: any): any;
    static HaveAudioCallback(behaviour: any): boolean;
    static GetCustomFilterChannelCount(behaviour: any): number;
    static GetCustomFilterProcessTime(behaviour: any): number;
    static GetCustomFilterMaxIn(behaviour: any, channel: number): number;
    static GetCustomFilterMaxOut(behaviour: any, channel: number): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static resetAllAudioClipPlayCountsOnPlay: boolean;
    static readonly canUseSpatializerEffect: boolean;
    // fields
  }
}
