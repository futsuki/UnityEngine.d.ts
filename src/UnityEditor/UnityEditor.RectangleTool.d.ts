declare namespace UnityEditor {
  class RectangleTool {
    // constructors
    constructor();
    // methods
    Initialize(timeArea: UnityEditor.TimeArea): any;
    ToolCoordToPosition(coord: UnityEditor.RectangleTool.ToolCoord, bounds: any): any;
    CalculateScaleTimeMatrix(fromTime: number, toTime: number, offsetTime: number, pivotTime: number, frameRate: number, transform: any, flipKeys: any): boolean;
    CalculateScaleValueMatrix(fromValue: number, toValue: number, offsetValue: number, pivotValue: number, transform: any, flipKeys: any): boolean;
    PixelToTime(pixelTime: number, frameRate: number): number;
    PixelToValue(pixelValue: number): number;
    TimeToPixel(time: number): number;
    ValueToPixel(value: number): number;
    HandleClutchKeys(): any;
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
