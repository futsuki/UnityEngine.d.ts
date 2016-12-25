declare namespace UnityEngine {
  class RectOffset {
    // constructors
    constructor();
    constructor(left: number, right: number, top: number, bottom: number);
    // methods
    Add(rect: UnityEngine.Rect): UnityEngine.Rect;
    Remove(rect: UnityEngine.Rect): UnityEngine.Rect;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    left: number;
    right: number;
    top: number;
    bottom: number;
    readonly horizontal: number;
    readonly vertical: number;
    // fields
  }
}
