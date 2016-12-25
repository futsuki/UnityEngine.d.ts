declare namespace UnityEditor {
  class ContainerWindow {
    // constructors
    constructor();
    // methods
    SetAlpha(alpha: number): any;
    SetInvisible(): any;
    IsZoomed(): boolean;
    static SetFreezeDisplay(freeze: boolean): any;
    DisplayAllViews(): any;
    Minimize(): any;
    ToggleMaximize(): any;
    MoveInFrontOf(other: UnityEditor.ContainerWindow): any;
    MoveBehindOf(other: UnityEditor.ContainerWindow): any;
    InternalClose(): any;
    OnDestroy(): any;
    Show(showMode: UnityEditor.ShowMode, loadPosition: boolean, displayImmediately: boolean): any;
    OnEnable(): any;
    SetMinMaxSizes(min: any, max: any): any;
    Close(): any;
    Save(): any;
    WindowToScreenPoint(windowPoint: any): any;
    HandleWindowDecorationEnd(windowPosition: any): any;
    HandleWindowDecorationStart(windowPosition: any): any;
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly maximized: boolean;
    position: any;
    title: string;
    static readonly windows: UnityEditor.ContainerWindow[];
    rootView: UnityEditor.View;
    readonly rootSplitView: UnityEditor.SplitView;
    name: string;
    hideFlags: any;
    // fields
  }
}
