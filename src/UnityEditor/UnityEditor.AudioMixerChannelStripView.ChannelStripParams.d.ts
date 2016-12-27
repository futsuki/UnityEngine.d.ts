declare namespace UnityEditor.AudioMixerChannelStripView {
  class ChannelStripParams extends System.Object {
    // constructors
    constructor();
    // methods
    Init(controller: UnityEditor.Audio.AudioMixerController, channelStripRect: any, maxNumEffects: number): void;
    // properties
    // fields
    index: number;
    stripRect: any;
    visibleRect: any;
    visible: boolean;
    group: UnityEditor.Audio.AudioMixerGroupController;
    maxEffects: number;
    drawingBuses: boolean;
    anySoloActive: boolean;
    busConnections: UnityEditor.AudioMixerChannelStripView.BusConnection[];
    rectSelectionGroups: UnityEditor.Audio.AudioMixerGroupController[];
    allGroups: UnityEditor.Audio.AudioMixerGroupController[];
    shownGroups: UnityEditor.Audio.AudioMixerGroupController[];
    numChannels: number;
    vuinfo_level: number[];
    vuinfo_peak: number[];
    effectMap: any;
    bgRects: any[];
    kHeaderIndex: number;
    kVUMeterFaderIndex: number;
    kTotalVULevelIndex: number;
    kSoloMuteBypassIndex: number;
    kEffectStartIndex: number;
  }
}
