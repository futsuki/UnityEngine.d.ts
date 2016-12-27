declare namespace UnityEditor {
  class LookDevEnvironmentWindow extends System.Object {
    // constructors
    constructor(lookDevView: UnityEditor.LookDevView);
    // methods
    SetRects(positionInLookDev: any, GUIRect: any, displayRect: any): void;
    GetCurrentSelection(): any;
    GetSelectedPositionOffset(): any;
    CancelSelection(): void;
    static PositionToLatLong(position: any): any;
    ResetShadowCubemap(): void;
    OnGUI(windowID: number): void;
    // properties
    static readonly styles: UnityEditor.LookDevEnvironmentWindow.Styles;
    // fields
    static m_latLongHeight: number;
    static m_HDRIHeaderHeight: number;
    static m_HDRIHeight: number;
    static m_HDRIWidth: number;
  }
}
