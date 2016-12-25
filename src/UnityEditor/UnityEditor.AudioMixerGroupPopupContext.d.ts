declare namespace UnityEditor {
  class AudioMixerGroupPopupContext {
    // constructors
    constructor(controller: UnityEditor.Audio.AudioMixerController, group: UnityEditor.Audio.AudioMixerGroupController);
    constructor(controller: UnityEditor.Audio.AudioMixerController, groups: UnityEditor.Audio.AudioMixerGroupController[]);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    controller: UnityEditor.Audio.AudioMixerController;
    groups: UnityEditor.Audio.AudioMixerGroupController[];
  }
}
