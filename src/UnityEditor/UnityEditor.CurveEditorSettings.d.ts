declare namespace UnityEditor {
  class CurveEditorSettings extends System.Object {
    // constructors
    constructor();
    // methods
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
