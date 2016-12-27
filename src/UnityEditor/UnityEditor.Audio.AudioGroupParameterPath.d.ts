declare namespace UnityEditor.Audio {
  class AudioGroupParameterPath extends UnityEditor.Audio.AudioParameterPath {
    // constructors
    constructor(group: UnityEditor.Audio.AudioMixerGroupController, parameter: UnityEditor.GUID);
    // methods
    ResolveStringPath(getOnlyBasePath: boolean): string;
    // properties
    // fields
    group: UnityEditor.Audio.AudioMixerGroupController;
  }
}
