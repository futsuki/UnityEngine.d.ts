declare namespace UnityEditor {
  class CurveEditorSettings {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    hRangeMin: number;
    hRangeMax: number;
    vRangeMin: number;
    vRangeMax: number;
    readonly hasUnboundedRanges: boolean;
    hSlider: boolean;
    vSlider: boolean;
    // fields
    hTickLabelOffset: number;
    wrapColor: UnityEditor.EditorGUIUtility.SkinnedColor;
    useFocusColors: boolean;
    showAxisLabels: boolean;
    showWrapperPopups: boolean;
    allowDraggingCurvesAndRegions: boolean;
    allowDeleteLastKeyInCurve: boolean;
    undoRedoSelection: boolean;
  }
}
