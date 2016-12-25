declare namespace UnityEditor.AudioMixerWindow {
  class SectionType {
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
    static MixerTree: UnityEditor.AudioMixerWindow.SectionType;
    static GroupTree: UnityEditor.AudioMixerWindow.SectionType;
    static ViewList: UnityEditor.AudioMixerWindow.SectionType;
    static SnapshotList: UnityEditor.AudioMixerWindow.SectionType;
  }
}
