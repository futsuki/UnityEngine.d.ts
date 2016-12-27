declare namespace UnityEngine.UI {
  class CanvasUpdateRegistry extends System.Object {
    // constructors
    protected constructor();
    // methods
    static RegisterCanvasElementForLayoutRebuild(element: UnityEngine.UI.ICanvasElement): void;
    static TryRegisterCanvasElementForLayoutRebuild(element: UnityEngine.UI.ICanvasElement): boolean;
    static RegisterCanvasElementForGraphicRebuild(element: UnityEngine.UI.ICanvasElement): void;
    static TryRegisterCanvasElementForGraphicRebuild(element: UnityEngine.UI.ICanvasElement): boolean;
    static UnRegisterCanvasElementForRebuild(element: UnityEngine.UI.ICanvasElement): void;
    static IsRebuildingLayout(): boolean;
    static IsRebuildingGraphics(): boolean;
    // properties
    static readonly instance: UnityEngine.UI.CanvasUpdateRegistry;
    // fields
  }
}
