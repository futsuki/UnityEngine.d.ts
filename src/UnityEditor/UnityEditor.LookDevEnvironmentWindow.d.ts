declare namespace UnityEditor {
  class LookDevEnvironmentWindow {
    // constructors
    constructor(lookDevView: UnityEditor.LookDevView);
    // methods
    SetRects(positionInLookDev: any, GUIRect: any, displayRect: any): any;
    GetCurrentSelection(): any;
    GetSelectedPositionOffset(): any;
    CancelSelection(): any;
    static PositionToLatLong(position: any): any;
    ResetShadowCubemap(): any;
    OnGUI(windowID: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly styles: UnityEditor.LookDevEnvironmentWindow.Styles;
    // fields
    static m_latLongHeight: number;
    static m_HDRIHeaderHeight: number;
    static m_HDRIHeight: number;
    static m_HDRIWidth: number;
  }
}
