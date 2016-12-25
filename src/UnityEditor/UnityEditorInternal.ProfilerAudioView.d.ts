declare namespace UnityEditorInternal {
  class ProfilerAudioView {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Stats: UnityEditorInternal.ProfilerAudioView;
    static Channels: UnityEditorInternal.ProfilerAudioView;
    static Groups: UnityEditorInternal.ProfilerAudioView;
    static ChannelsAndGroups: UnityEditorInternal.ProfilerAudioView;
    static DSPGraph: UnityEditorInternal.ProfilerAudioView;
    static Clips: UnityEditorInternal.ProfilerAudioView;
  }
}
