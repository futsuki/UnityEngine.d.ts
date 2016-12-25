declare namespace UnityEditor.Audio.AudioMixerController {
  class ConnectionNode {
    // constructors
    constructor();
    // methods
    GetDisplayString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    visited: boolean;
    groupTail: any;
    targets: any;
    group: UnityEditor.Audio.AudioMixerGroupController;
    effect: UnityEditor.Audio.AudioMixerEffectController;
  }
}
