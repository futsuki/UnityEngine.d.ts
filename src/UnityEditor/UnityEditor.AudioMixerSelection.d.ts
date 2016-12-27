declare namespace UnityEditor {
  class AudioMixerSelection extends System.Object {
    // constructors
    constructor(controller: UnityEditor.Audio.AudioMixerController);
    // methods
    SyncToUnitySelection(): void;
    SetChannelStrips(newSelection: UnityEditor.Audio.AudioMixerGroupController[]): void;
    SetSingleChannelStrip(group: UnityEditor.Audio.AudioMixerGroupController): void;
    ToggleChannelStrip(group: UnityEditor.Audio.AudioMixerGroupController): void;
    ClearChannelStrips(): void;
    HasSingleChannelStripSelection(): boolean;
    Sanitize(): void;
    // properties
    readonly ChannelStripSelection: UnityEditor.Audio.AudioMixerGroupController[];
    // fields
  }
}
