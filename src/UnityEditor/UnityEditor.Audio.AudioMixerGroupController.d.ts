declare namespace UnityEditor.Audio {
  class AudioMixerGroupController extends UnityEngine.Audio.AudioMixerGroup {
    // constructors
    constructor(owner: UnityEngine.Audio.AudioMixer);
    // methods
    PreallocateGUIDs(): void;
    GetGUIDForVolume(): UnityEditor.GUID;
    GetValueForVolume(controller: UnityEditor.Audio.AudioMixerController, snapshot: UnityEditor.Audio.AudioMixerSnapshotController): number;
    SetValueForVolume(controller: UnityEditor.Audio.AudioMixerController, snapshot: UnityEditor.Audio.AudioMixerSnapshotController, value: number): void;
    GetGUIDForPitch(): UnityEditor.GUID;
    GetValueForPitch(controller: UnityEditor.Audio.AudioMixerController, snapshot: UnityEditor.Audio.AudioMixerSnapshotController): number;
    SetValueForPitch(controller: UnityEditor.Audio.AudioMixerController, snapshot: UnityEditor.Audio.AudioMixerSnapshotController, value: number): void;
    HasDependentMixers(): boolean;
    InsertEffect(effect: UnityEditor.Audio.AudioMixerEffectController, index: number): void;
    HasAttenuation(): boolean;
    DumpHierarchy(title: string, level: number): void;
    GetDisplayString(): string;
    ToString(): string;
    // properties
    readonly groupID: UnityEditor.GUID;
    userColorIndex: number;
    readonly controller: UnityEditor.Audio.AudioMixerController;
    children: UnityEditor.Audio.AudioMixerGroupController[];
    effects: UnityEditor.Audio.AudioMixerEffectController[];
    mute: boolean;
    solo: boolean;
    bypassEffects: boolean;
    // fields
  }
}
