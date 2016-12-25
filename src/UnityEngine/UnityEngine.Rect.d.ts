declare namespace UnityEngine {
  class Rect {
    // constructors
    private constructor();
    // methods
    static MinMaxRect(xmin: number, ymin: number, xmax: number, ymax: number): UnityEngine.Rect;
    Set(x: number, y: number, width: number, height: number): any;
    Contains(point: UnityEngine.Vector2): boolean;
    Contains(point: UnityEngine.Vector3): boolean;
    Contains(point: UnityEngine.Vector3, allowInverse: boolean): boolean;
    Overlaps(other: UnityEngine.Rect): boolean;
    Overlaps(other: UnityEngine.Rect, allowInverse: boolean): boolean;
    static NormalizedToPoint(rectangle: UnityEngine.Rect, normalizedRectCoordinates: UnityEngine.Vector2): UnityEngine.Vector2;
    static PointToNormalized(rectangle: UnityEngine.Rect, point: UnityEngine.Vector2): UnityEngine.Vector2;
    GetHashCode(): number;
    Equals(other: any): boolean;
    ToString(): string;
    ToString(format: string): string;
    GetType(): any;
    // properties
    static readonly zero: UnityEngine.Rect;
    x: number;
    y: number;
    position: UnityEngine.Vector2;
    center: UnityEngine.Vector2;
    min: UnityEngine.Vector2;
    max: UnityEngine.Vector2;
    width: number;
    height: number;
    size: UnityEngine.Vector2;
    xMin: number;
    yMin: number;
    xMax: number;
    yMax: number;
    readonly left: number;
    readonly right: number;
    readonly top: number;
    readonly bottom: number;
    // fields
  }
}
