declare namespace UnityEditor {
  class AudioMixerSelection {
    // constructors
    constructor(controller: UnityEditor.Audio.AudioMixerController);
    // methods
    SyncToUnitySelection(): any;
    SetChannelStrips(newSelection: any): any;
    SetSingleChannelStrip(group: UnityEditor.Audio.AudioMixerGroupController): any;
    ToggleChannelStrip(group: UnityEditor.Audio.AudioMixerGroupController): any;
    ClearChannelStrips(): any;
    HasSingleChannelStripSelection(): boolean;
    Sanitize(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly ChannelStripSelection: any;
    // fields
  }
}
