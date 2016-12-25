declare namespace UnityEditor.AudioMixerChannelStripView {
  class BusConnection {
    // constructors
    constructor(srcX: number, srcY: number, targetEffect: UnityEditor.Audio.AudioMixerEffectController, mixLevel: number, col: any, isSend: boolean, isSelected: boolean);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    targetEffect: UnityEditor.Audio.AudioMixerEffectController;
    srcX: number;
    srcY: number;
    mixLevel: number;
    color: any;
    isSend: boolean;
    isSelected: boolean;
  }
}
