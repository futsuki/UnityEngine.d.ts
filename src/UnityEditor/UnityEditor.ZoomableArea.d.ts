declare namespace UnityEditor {
  class ZoomableArea extends System.Object {
    // constructors
    constructor();
    constructor(minimalGUI: boolean);
    constructor(minimalGUI: boolean, enableSliderZoom: boolean);
    // methods
    SetShownHRangeInsideMargins(min: number, max: number): void;
    SetShownHRange(min: number, max: number): void;
    SetShownVRangeInsideMargins(min: number, max: number): void;
    SetShownVRange(min: number, max: number): void;
    DrawingToViewTransformPoint(lhs: any): any;
    DrawingToViewTransformPoint(lhs: any): any;
    ViewToDrawingTransformPoint(lhs: any): any;
    ViewToDrawingTransformPoint(lhs: any): any;
    DrawingToViewTransformVector(lhs: any): any;
    DrawingToViewTransformVector(lhs: any): any;
    ViewToDrawingTransformVector(lhs: any): any;
    ViewToDrawingTransformVector(lhs: any): any;
    NormalizeInViewSpace(vec: any): any;
    BeginViewGUI(): void;
    HandleZoomAndPanEvents(area: any): void;
    EndViewGUI(): void;
    SetScaleFocused(focalPoint: any, newScale: any): void;
    SetScaleFocused(focalPoint: any, newScale: any, lockHorizontal: boolean, lockVertical: boolean): void;
    SetTransform(newTranslation: any, newScale: any): void;
    EnforceScaleAndRange(): void;
    PixelToTime(pixelX: number, rect: any): number;
    TimeToPixel(time: number, rect: any): number;
    PixelDeltaToTime(rect: any): number;
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
