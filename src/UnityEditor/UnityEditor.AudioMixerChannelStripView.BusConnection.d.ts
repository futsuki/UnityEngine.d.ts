declare namespace UnityEditor.AudioMixerChannelStripView {
  class BusConnection extends System.Object {
    // constructors
    constructor(srcX: number, srcY: number, targetEffect: UnityEditor.Audio.AudioMixerEffectController, mixLevel: number, col: any, isSend: boolean, isSelected: boolean);
    // methods
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
