declare namespace UnityEditor.AudioMixerChannelStripView {
  class ChannelStripParams {
    // constructors
    constructor();
    // methods
    Init(controller: UnityEditor.Audio.AudioMixerController, channelStripRect: any, maxNumEffects: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
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
    busConnections: any;
    rectSelectionGroups: any;
    allGroups: any;
    shownGroups: any;
    numChannels: number;
    vuinfo_level: number[];
    vuinfo_peak: number[];
    effectMap: any;
    bgRects: any;
    kHeaderIndex: number;
    kVUMeterFaderIndex: number;
    kTotalVULevelIndex: number;
    kSoloMuteBypassIndex: number;
    kEffectStartIndex: number;
  }
}
