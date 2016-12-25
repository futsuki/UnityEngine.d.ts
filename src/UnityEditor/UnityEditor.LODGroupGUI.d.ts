declare namespace UnityEditor {
  class LODGroupGUI {
    // constructors
    private constructor();
    // methods
    static DelinearizeScreenPercentage(percentage: number): number;
    static LinearizeScreenPercentage(percentage: number): number;
    static CalcLODButton(totalRect: any, percentage: number): any;
    static GetCulledBox(totalRect: any, previousLODPercentage: number): any;
    static CreateLODInfos(numLODs: number, area: any, nameGen: any, heightGen: any): any;
    static GetCameraPercent(position: any, sliderRect: any): number;
    static SetSelectedLODLevelPercentage(newScreenPercentage: number, lod: number, lods: any): any;
    static DrawLODSlider(area: any, lods: any, selectedLevel: number): any;
    static DrawMixedValueLODSlider(area: any): any;
    // properties
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
