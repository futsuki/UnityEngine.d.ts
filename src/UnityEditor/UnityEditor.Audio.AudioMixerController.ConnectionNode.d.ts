declare namespace UnityEditor.Audio.AudioMixerController {
  class ConnectionNode extends System.Object {
    // constructors
    constructor();
    // methods
    GetDisplayString(): string;
    // properties
    // fields
    visited: boolean;
    groupTail: any;
    targets: any[];
    group: UnityEditor.Audio.AudioMixerGroupController;
    effect: UnityEditor.Audio.AudioMixerEffectController;
  }
}
