declare namespace UnityEngine.UI {
  class CanvasUpdateRegistry {
    // constructors
    private constructor();
    // methods
    static RegisterCanvasElementForLayoutRebuild(element: UnityEngine.UI.ICanvasElement): void;
    static TryRegisterCanvasElementForLayoutRebuild(element: UnityEngine.UI.ICanvasElement): boolean;
    static RegisterCanvasElementForGraphicRebuild(element: UnityEngine.UI.ICanvasElement): void;
    static TryRegisterCanvasElementForGraphicRebuild(element: UnityEngine.UI.ICanvasElement): boolean;
    static UnRegisterCanvasElementForRebuild(element: UnityEngine.UI.ICanvasElement): void;
    static IsRebuildingLayout(): boolean;
    static IsRebuildingGraphics(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly instance: UnityEngine.UI.CanvasUpdateRegistry;
    // fields
  }
}
