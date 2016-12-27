declare namespace UnityEditor {
  class AudioMixerChannelStripView extends System.Object {
    // constructors
    constructor(state: UnityEditor.AudioMixerChannelStripView.State);
    // methods
    static InsertEffectPopupCallback(obj: any): void;
    RemoveEffectPopupCallback(obj: any): void;
    static ConnectSendPopupCallback(obj: any): void;
    VerticalFader(r: any, value: number, direction: number, dragScale: number, drawScaleValues: boolean, drawMarkerValue: boolean, tooltip: string, maxValue: number, style: any): number;
    HorizontalFader(r: any, value: number, minValue: number, maxValue: number, direction: number, dragScale: number): number;
    GetEffectBarStyle(effect: UnityEditor.Audio.AudioMixerEffectController): any;
    static AddMenuItemsForReturns(pm: UnityEditor.GenericMenu, prefix: string, effectIndex: number, group: UnityEditor.Audio.AudioMixerGroupController, allGroups: UnityEditor.Audio.AudioMixerGroupController[], effectMap: any, effect: UnityEditor.Audio.AudioMixerEffectController, showCurrent: boolean): void;
    VUMeter(group: UnityEditor.Audio.AudioMixerGroupController, r: any, level: number, peak: number): void;
    OnMixerControllerChanged(controller: UnityEditor.Audio.AudioMixerController): void;
    ShowDeveloperOverlays(rect: any, evt: any, show: boolean): void;
    static Lerp(x1: number, x2: number, t: number): number;
    static GetCableVertex(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, t: number, x: any, y: any): void;
    OnGUI(rect: any, showReferencedBuses: boolean, showBusConnections: boolean, showBusConnectionsOfSelection: boolean, allGroups: UnityEditor.Audio.AudioMixerGroupController[], effectMap: any, sortGroupsAlphabetically: boolean, showDeveloperOverlays: boolean, scrollToItem: UnityEditor.Audio.AudioMixerGroupController): void;
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
