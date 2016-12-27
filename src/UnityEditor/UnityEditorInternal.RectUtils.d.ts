declare namespace UnityEditorInternal {
  class RectUtils extends System.Object {
    // constructors
    constructor();
    // methods
    static Contains(a: any, b: any): boolean;
    static Encompass(a: any, b: any): any;
    static Inflate(a: any, factor: number): any;
    static Inflate(a: any, factorX: number, factorY: number): any;
    static Intersects(r1: any, r2: any): boolean;
    static Intersection(r1: any, r2: any, intersection: any): boolean;
    static IntersectsSegment(rect: any, p1: any, p2: any): boolean;
    static OffsetX(r: any, offsetX: number): any;
    static Offset(r: any, offsetX: number, offsetY: number): any;
    static Offset(a: any, b: any): any;
    static Move(r: any, delta: any): any;
    // properties
    // fields
  }
}
