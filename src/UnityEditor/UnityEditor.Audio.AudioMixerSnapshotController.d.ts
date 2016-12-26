declare namespace UnityEditor.Audio {
  class AudioMixerSnapshotController {
    // constructors
    constructor(owner: any);
    // methods
    SetValue(guid: UnityEditor.GUID, value: number): void;
    GetValue(guid: UnityEditor.GUID, value: any): boolean;
    SetTransitionTypeOverride(guid: UnityEditor.GUID, type: UnityEditor.Audio.ParameterTransitionType): void;
    GetTransitionTypeOverride(guid: UnityEditor.GUID, type: any): boolean;
    ClearTransitionTypeOverride(guid: UnityEditor.GUID): void;
    TransitionTo(timeToReach: number): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly snapshotID: UnityEditor.GUID;
    readonly audioMixer: any;
    name: string;
    hideFlags: any;
    // fields
  }
}
