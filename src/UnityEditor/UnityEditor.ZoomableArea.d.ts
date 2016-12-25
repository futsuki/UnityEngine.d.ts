declare namespace UnityEditor {
  class ZoomableArea {
    // constructors
    constructor();
    constructor(minimalGUI: boolean);
    constructor(minimalGUI: boolean, enableSliderZoom: boolean);
    // methods
    SetShownHRangeInsideMargins(min: number, max: number): any;
    SetShownHRange(min: number, max: number): any;
    SetShownVRangeInsideMargins(min: number, max: number): any;
    SetShownVRange(min: number, max: number): any;
    DrawingToViewTransformPoint(lhs: any): any;
    DrawingToViewTransformPoint(lhs: any): any;
    ViewToDrawingTransformPoint(lhs: any): any;
    ViewToDrawingTransformPoint(lhs: any): any;
    DrawingToViewTransformVector(lhs: any): any;
    DrawingToViewTransformVector(lhs: any): any;
    ViewToDrawingTransformVector(lhs: any): any;
    ViewToDrawingTransformVector(lhs: any): any;
    NormalizeInViewSpace(vec: any): any;
    BeginViewGUI(): any;
    HandleZoomAndPanEvents(area: any): any;
    EndViewGUI(): any;
    SetScaleFocused(focalPoint: any, newScale: any): any;
    SetScaleFocused(focalPoint: any, newScale: any, lockHorizontal: boolean, lockVertical: boolean): any;
    SetTransform(newTranslation: any, newScale: any): any;
    EnforceScaleAndRange(): any;
    PixelToTime(pixelX: number, rect: any): number;
    TimeToPixel(time: number, rect: any): number;
    PixelDeltaToTime(rect: any): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    hRangeLocked: boolean;
    vRangeLocked: boolean;
    hBaseRangeMin: number;
    hBaseRangeMax: number;
    vBaseRangeMin: number;
    vBaseRangeMax: number;
    hAllowExceedBaseRangeMin: boolean;
    hAllowExceedBaseRangeMax: boolean;
    vAllowExceedBaseRangeMin: boolean;
    vAllowExceedBaseRangeMax: boolean;
    hRangeMin: number;
    hRangeMax: number;
    vRangeMin: number;
    vRangeMax: number;
    hScaleMin: number;
    hScaleMax: number;
    vScaleMin: number;
    vScaleMax: number;
    scaleWithWindow: boolean;
    hSlider: boolean;
    vSlider: boolean;
    ignoreScrollWheelUntilClicked: boolean;
    enableMouseInput: boolean;
    uniformScale: boolean;
    upDirection: UnityEditor.ZoomableArea.YDirection;
    readonly scale: any;
    readonly translation: any;
    leftmargin: number;
    rightmargin: number;
    topmargin: number;
    bottommargin: number;
    rect: any;
    readonly drawRect: any;
    shownArea: any;
    shownAreaInsideMargins: any;
    readonly drawingBounds: any;
    readonly drawingToViewMatrix: any;
    readonly mousePositionInDrawing: any;
    // fields
    m_UniformScale: boolean;
  }
}
