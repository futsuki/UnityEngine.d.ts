declare namespace UnityEngine.UI {
  class GraphicRegistry extends System.Object {
    // constructors
    protected constructor();
    // methods
    static RegisterGraphicForCanvas(c: UnityEngine.Canvas, graphic: UnityEngine.UI.Graphic): void;
    static UnregisterGraphicForCanvas(c: UnityEngine.Canvas, graphic: UnityEngine.UI.Graphic): void;
    static GetGraphicsForCanvas(canvas: UnityEngine.Canvas): UnityEngine.UI.Graphic[];
    // properties
    static readonly instance: UnityEngine.UI.GraphicRegistry;
    // fields
  }
}
