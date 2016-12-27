declare namespace UnityEditor.Audio {
  class AudioEffectParameterPath extends UnityEditor.Audio.AudioGroupParameterPath {
    // constructors
    constructor(group: UnityEditor.Audio.AudioMixerGroupController, effect: UnityEditor.Audio.AudioMixerEffectController, parameter: UnityEditor.GUID);
    // methods
    ResolveStringPath(getOnlyBasePath: boolean): string;
    // properties
    // fields
    effect: UnityEditor.Audio.AudioMixerEffectController;
  }
}
