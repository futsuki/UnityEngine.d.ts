declare namespace UnityEditor {
  class CurveEditorRectangleTool {
    // constructors
    constructor();
    // methods
    Initialize(timeArea: UnityEditor.TimeArea): void;
    OnGUI(): void;
    OverlayOnGUI(): void;
    HandleEvents(): void;
    HandleOverlayEvents(): void;
    ToolCoordToPosition(coord: UnityEditor.RectangleTool.ToolCoord, bounds: any): any;
    CalculateScaleTimeMatrix(fromTime: number, toTime: number, offsetTime: number, pivotTime: number, frameRate: number, transform: any, flipKeys: any): boolean;
    CalculateScaleValueMatrix(fromValue: number, toValue: number, offsetValue: number, pivotValue: number, transform: any, flipKeys: any): boolean;
    PixelToTime(pixelTime: number, frameRate: number): number;
    PixelToValue(pixelValue: number): number;
    TimeToPixel(time: number): number;
    ValueToPixel(value: number): number;
    HandleClutchKeys(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly timeArea: UnityEditor.TimeArea;
    readonly styles: UnityEditor.RectangleTool.Styles;
    readonly rippleTimeClutch: boolean;
    readonly contentRect: any;
    // fields
  }
}
