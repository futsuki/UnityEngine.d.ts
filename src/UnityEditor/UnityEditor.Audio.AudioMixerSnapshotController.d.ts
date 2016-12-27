declare namespace UnityEditor.Audio {
  class AudioMixerSnapshotController extends UnityEngine.Audio.AudioMixerSnapshot {
    // constructors
    constructor(owner: UnityEngine.Audio.AudioMixer);
    // methods
    SetValue(guid: UnityEditor.GUID, value: number): void;
    GetValue(guid: UnityEditor.GUID, value: any): boolean;
    SetTransitionTypeOverride(guid: UnityEditor.GUID, type: UnityEditor.Audio.ParameterTransitionType): void;
    GetTransitionTypeOverride(guid: UnityEditor.GUID, type: any): boolean;
    ClearTransitionTypeOverride(guid: UnityEditor.GUID): void;
    // properties
    readonly snapshotID: UnityEditor.GUID;
    // fields
  }
}
