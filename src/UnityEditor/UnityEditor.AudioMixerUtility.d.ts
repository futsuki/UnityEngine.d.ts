declare namespace UnityEditor {
  class AudioMixerUtility {
    // constructors
    constructor();
    // methods
    static RepaintAudioMixerAndInspectors(): void;
    static VisitGroupsRecursivly(group: UnityEditor.Audio.AudioMixerGroupController, visitorCallback: ((UnityEditor.Audio.AudioMixerGroupController) => void)): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
