declare namespace UnityEditor.Audio {
  class AudioGroupParameterPath {
    // constructors
    constructor(group: UnityEditor.Audio.AudioMixerGroupController, parameter: UnityEditor.GUID);
    // methods
    ResolveStringPath(getOnlyBasePath: boolean): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    group: UnityEditor.Audio.AudioMixerGroupController;
    parameter: UnityEditor.GUID;
  }
}
