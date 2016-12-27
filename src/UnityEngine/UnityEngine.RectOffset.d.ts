declare namespace UnityEngine {
  class RectOffset extends System.Object {
    // constructors
    constructor();
    constructor(left: number, right: number, top: number, bottom: number);
    // methods
    Add(rect: UnityEngine.Rect): UnityEngine.Rect;
    Remove(rect: UnityEngine.Rect): UnityEngine.Rect;
    ToString(): string;
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
