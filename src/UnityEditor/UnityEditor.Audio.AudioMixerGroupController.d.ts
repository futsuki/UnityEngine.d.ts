declare namespace UnityEditor.Audio {
  class AudioMixerGroupController {
    // constructors
    constructor(owner: any);
    // methods
    PreallocateGUIDs(): any;
    GetGUIDForVolume(): UnityEditor.GUID;
    GetValueForVolume(controller: UnityEditor.Audio.AudioMixerController, snapshot: UnityEditor.Audio.AudioMixerSnapshotController): number;
    SetValueForVolume(controller: UnityEditor.Audio.AudioMixerController, snapshot: UnityEditor.Audio.AudioMixerSnapshotController, value: number): any;
    GetGUIDForPitch(): UnityEditor.GUID;
    GetValueForPitch(controller: UnityEditor.Audio.AudioMixerController, snapshot: UnityEditor.Audio.AudioMixerSnapshotController): number;
    SetValueForPitch(controller: UnityEditor.Audio.AudioMixerController, snapshot: UnityEditor.Audio.AudioMixerSnapshotController, value: number): any;
    HasDependentMixers(): boolean;
    InsertEffect(effect: UnityEditor.Audio.AudioMixerEffectController, index: number): any;
    HasAttenuation(): boolean;
    DumpHierarchy(title: string, level: number): any;
    GetDisplayString(): string;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly groupID: UnityEditor.GUID;
    userColorIndex: number;
    readonly controller: UnityEditor.Audio.AudioMixerController;
    children: UnityEditor.Audio.AudioMixerGroupController[];
    effects: UnityEditor.Audio.AudioMixerEffectController[];
    mute: boolean;
    solo: boolean;
    bypassEffects: boolean;
    readonly audioMixer: any;
    name: string;
    hideFlags: any;
    // fields
  }
}
