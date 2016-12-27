declare namespace UnityEditor {
  class LODGroupGUI extends System.Object {
    // constructors
    protected constructor();
    // methods
    static DelinearizeScreenPercentage(percentage: number): number;
    static LinearizeScreenPercentage(percentage: number): number;
    static CalcLODButton(totalRect: any, percentage: number): any;
    static GetCulledBox(totalRect: any, previousLODPercentage: number): any;
    static CreateLODInfos(numLODs: number, area: any, nameGen: ((arg1: number) => string), heightGen: ((arg1: number) => number)): UnityEditor.LODGroupGUI.LODInfo[];
    static GetCameraPercent(position: any, sliderRect: any): number;
    static SetSelectedLODLevelPercentage(newScreenPercentage: number, lod: number, lods: UnityEditor.LODGroupGUI.LODInfo[]): void;
    static DrawLODSlider(area: any, lods: UnityEditor.LODGroupGUI.LODInfo[], selectedLevel: number): void;
    static DrawMixedValueLODSlider(area: any): void;
    // properties
    static readonly Styles: UnityEditor.LODGroupGUI.GUIStyles;
    // fields
    static kLODColors: any[];
    static kCulledLODColor: any;
    static kSceneLabelHalfWidth: number;
    static kSceneLabelHeight: number;
    static kSceneHeaderOffset: number;
    static kSliderBarTopMargin: number;
    static kSliderBarHeight: number;
    static kSliderBarBottomMargin: number;
    static kRenderersButtonHeight: number;
    static kButtonPadding: number;
    static kDeleteButtonSize: number;
    static kSelectedLODRangePadding: number;
    static kRenderAreaForegroundPadding: number;
  }
}
