declare namespace UnityEditor {
  class ContainerWindow extends UnityEngine.ScriptableObject {
    // constructors
    constructor();
    // methods
    SetAlpha(alpha: number): void;
    SetInvisible(): void;
    IsZoomed(): boolean;
    static SetFreezeDisplay(freeze: boolean): void;
    DisplayAllViews(): void;
    Minimize(): void;
    ToggleMaximize(): void;
    MoveInFrontOf(other: UnityEditor.ContainerWindow): void;
    MoveBehindOf(other: UnityEditor.ContainerWindow): void;
    InternalClose(): void;
    OnDestroy(): void;
    Show(showMode: UnityEditor.ShowMode, loadPosition: boolean, displayImmediately: boolean): void;
    OnEnable(): void;
    SetMinMaxSizes(min: any, max: any): void;
    Close(): void;
    Save(): void;
    WindowToScreenPoint(windowPoint: any): any;
    HandleWindowDecorationEnd(windowPosition: any): void;
    HandleWindowDecorationStart(windowPosition: any): void;
    // properties
    readonly maximized: boolean;
    position: any;
    title: string;
    static readonly windows: UnityEditor.ContainerWindow[];
    rootView: UnityEditor.View;
    readonly rootSplitView: UnityEditor.SplitView;
    // fields
  }
}
