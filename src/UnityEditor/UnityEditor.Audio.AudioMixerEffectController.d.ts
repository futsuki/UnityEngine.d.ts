declare namespace UnityEditor.Audio {
  class AudioMixerEffectController extends UnityEngine.Object {
    // constructors
    constructor(name: string);
    // methods
    IsSend(): boolean;
    IsReceive(): boolean;
    IsDuckVolume(): boolean;
    IsAttenuation(): boolean;
    DisallowsBypass(): boolean;
    ClearCachedDisplayName(): void;
    GetDisplayString(effectMap: any): string;
    GetSendTargetDisplayString(effectMap: any): string;
    PreallocateGUIDs(): void;
    GetGUIDForMixLevel(): UnityEditor.GUID;
    GetValueForMixLevel(controller: UnityEditor.Audio.AudioMixerController, snapshot: UnityEditor.Audio.AudioMixerSnapshotController): number;
    SetValueForMixLevel(controller: UnityEditor.Audio.AudioMixerController, snapshot: UnityEditor.Audio.AudioMixerSnapshotController, value: number): void;
    GetGUIDForParameter(parameterName: string): UnityEditor.GUID;
    GetValueForParameter(controller: UnityEditor.Audio.AudioMixerController, snapshot: UnityEditor.Audio.AudioMixerSnapshotController, parameterName: string): number;
    SetValueForParameter(controller: UnityEditor.Audio.AudioMixerController, snapshot: UnityEditor.Audio.AudioMixerSnapshotController, parameterName: string, value: number): void;
    GetFloatBuffer(controller: UnityEditor.Audio.AudioMixerController, name: string, data: any, numsamples: number): boolean;
    GetCPUUsage(controller: UnityEditor.Audio.AudioMixerController): number;
    ContainsParameterGUID(guid: UnityEditor.GUID): boolean;
    // properties
    readonly effectID: UnityEditor.GUID;
    readonly effectName: string;
    sendTarget: UnityEditor.Audio.AudioMixerEffectController;
    enableWetMix: boolean;
    bypass: boolean;
    // fields
  }
}
