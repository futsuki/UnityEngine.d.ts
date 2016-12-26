declare namespace UnityEngine.UI {
  class GraphicRegistry {
    // constructors
    private constructor();
    // methods
    static RegisterGraphicForCanvas(c: UnityEngine.Canvas, graphic: UnityEngine.UI.Graphic): void;
    static UnregisterGraphicForCanvas(c: UnityEngine.Canvas, graphic: UnityEngine.UI.Graphic): void;
    static GetGraphicsForCanvas(canvas: UnityEngine.Canvas): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly instance: UnityEngine.UI.GraphicRegistry;
    // fields
  }
}
