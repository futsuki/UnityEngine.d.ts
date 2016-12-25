declare namespace UnityEditor {
  class AudioMixerChannelStripView {
    // constructors
    constructor(state: UnityEditor.AudioMixerChannelStripView.State);
    // methods
    static InsertEffectPopupCallback(obj: any): any;
    RemoveEffectPopupCallback(obj: any): any;
    static ConnectSendPopupCallback(obj: any): any;
    VerticalFader(r: any, value: number, direction: number, dragScale: number, drawScaleValues: boolean, drawMarkerValue: boolean, tooltip: string, maxValue: number, style: any): number;
    HorizontalFader(r: any, value: number, minValue: number, maxValue: number, direction: number, dragScale: number): number;
    GetEffectBarStyle(effect: UnityEditor.Audio.AudioMixerEffectController): any;
    static AddMenuItemsForReturns(pm: UnityEditor.GenericMenu, prefix: string, effectIndex: number, group: UnityEditor.Audio.AudioMixerGroupController, allGroups: any, effectMap: any, effect: UnityEditor.Audio.AudioMixerEffectController, showCurrent: boolean): any;
    VUMeter(group: UnityEditor.Audio.AudioMixerGroupController, r: any, level: number, peak: number): any;
    OnMixerControllerChanged(controller: UnityEditor.Audio.AudioMixerController): any;
    ShowDeveloperOverlays(rect: any, evt: any, show: boolean): any;
    static Lerp(x1: number, x2: number, t: number): number;
    static GetCableVertex(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, t: number, x: any, y: any): any;
    OnGUI(rect: any, showReferencedBuses: boolean, showBusConnections: boolean, showBusConnectionsOfSelection: boolean, allGroups: any, effectMap: any, sortGroupsAlphabetically: boolean, showDeveloperOverlays: boolean, scrollToItem: UnityEditor.Audio.AudioMixerGroupController): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly requiresRepaint: boolean;
    // fields
    static kVolumeScaleMouseDrag: number;
    static kEffectScaleMouseDrag: number;
    m_FocusIndex: number;
    m_IndexCounter: number;
    m_EffectInteractionControlID: number;
    m_RectSelectionControlID: number;
    m_MouseDragStartX: number;
    m_MouseDragStartY: number;
    m_MouseDragStartValue: number;
    m_RectSelectionStartPos: any;
    m_RectSelectionRect: any;
    sharedGuiStyle: any;
  }
}
