declare namespace UnityEditor.Audio {
  class AudioEffectParameterPath {
    // constructors
    constructor(group: UnityEditor.Audio.AudioMixerGroupController, effect: UnityEditor.Audio.AudioMixerEffectController, parameter: UnityEditor.GUID);
    // methods
    ResolveStringPath(getOnlyBasePath: boolean): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    effect: UnityEditor.Audio.AudioMixerEffectController;
    group: UnityEditor.Audio.AudioMixerGroupController;
    parameter: UnityEditor.GUID;
  }
}
