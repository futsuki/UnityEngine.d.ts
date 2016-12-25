declare namespace UnityEditor.AudioMixerChannelStripView {
  class ConnectSendContext {
    // constructors
    constructor(sendEffect: UnityEditor.Audio.AudioMixerEffectController, targetEffect: UnityEditor.Audio.AudioMixerEffectController);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    sendEffect: UnityEditor.Audio.AudioMixerEffectController;
    targetEffect: UnityEditor.Audio.AudioMixerEffectController;
  }
}
