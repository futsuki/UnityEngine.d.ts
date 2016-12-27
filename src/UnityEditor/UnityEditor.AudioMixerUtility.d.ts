declare namespace UnityEditor {
  class AudioMixerUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static RepaintAudioMixerAndInspectors(): void;
    static VisitGroupsRecursivly(group: UnityEditor.Audio.AudioMixerGroupController, visitorCallback: ((obj: UnityEditor.Audio.AudioMixerGroupController) => void)): void;
    // properties
    // fields
  }
}
