declare namespace UnityEditor {
  class AudioMixerSelection {
    // constructors
    constructor(controller: UnityEditor.Audio.AudioMixerController);
    // methods
    SyncToUnitySelection(): void;
    SetChannelStrips(newSelection: any): void;
    SetSingleChannelStrip(group: UnityEditor.Audio.AudioMixerGroupController): void;
    ToggleChannelStrip(group: UnityEditor.Audio.AudioMixerGroupController): void;
    ClearChannelStrips(): void;
    HasSingleChannelStripSelection(): boolean;
    Sanitize(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly ChannelStripSelection: any;
    // fields
  }
}
