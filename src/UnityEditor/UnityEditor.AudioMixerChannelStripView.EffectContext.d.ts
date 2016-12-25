declare namespace UnityEditor.AudioMixerChannelStripView {
  class EffectContext {
    // constructors
    constructor(controller: UnityEditor.Audio.AudioMixerController, groups: UnityEditor.Audio.AudioMixerGroupController[], index: number, name: string);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    controller: UnityEditor.Audio.AudioMixerController;
    groups: UnityEditor.Audio.AudioMixerGroupController[];
    index: number;
    name: string;
  }
}
