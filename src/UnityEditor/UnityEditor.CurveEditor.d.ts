declare namespace UnityEditor {
  class CurveEditor extends UnityEditor.TimeArea {
    // constructors
    constructor(rect: any, curves: UnityEditor.CurveWrapper[], minimalGUI: boolean);
    // methods
    GetTopMostCurveID(curveID: any): boolean;
    OnEnable(): void;
    OnDisable(): void;
    OnDestroy(): void;
    InvalidateBounds(): void;
    FrameClip(horizontally: boolean, vertically: boolean): void;
    FrameSelected(horizontally: boolean, vertically: boolean): void;
    UpdateCurves(curveIds: number[], undoText: string): void;
    UpdateCurves(changedCurves: UnityEditor.ChangedCurve[], undoText: string): void;
    StartLiveEdit(): void;
    EndLiveEdit(): void;
    InLiveEdit(): boolean;
    OnGUI(): void;
    CurveGUI(): void;
    AddKey(cw: UnityEditor.CurveWrapper, key: any): void;
    SelectNone(): void;
    SelectAll(): void;
    IsDraggingKey(): boolean;
    IsDraggingCurveOrRegion(): boolean;
    IsDraggingCurve(cw: UnityEditor.CurveWrapper): boolean;
    IsDraggingRegion(cw1: UnityEditor.CurveWrapper, cw2: UnityEditor.CurveWrapper): boolean;
    BeginTimeRangeSelection(time: number, addToSelection: boolean): void;
    TimeRangeSelectTo(time: number): void;
    EndTimeRangeSelection(): void;
    CancelTimeRangeSelection(): void;
    MovePoints(): any;
    SaveKeySelection(undoLabel: string): void;
    DrawRegion(curve1: UnityEditor.CurveWrapper, curve2: UnityEditor.CurveWrapper, hasFocus: boolean): void;
    GridGUI(): void;
    // properties
    animationCurves: UnityEditor.CurveWrapper[];
    readonly syncTimeDuringDrag: boolean;
    readonly timeFormat: UnityEditor.TimeArea.TimeFormat;
    settings: UnityEditor.CurveEditorSettings;
    tangentColor: any;
    readonly hasSelection: boolean;
    readonly selectionBounds: any;
    readonly curveBounds: any;
    readonly drawingBounds: any;
    // fields
    curvesUpdated: (() => void);
    state: UnityEditor.ICurveEditorState;
    invSnap: number;
  }
}
