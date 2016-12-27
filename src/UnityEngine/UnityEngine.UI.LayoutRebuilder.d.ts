declare namespace UnityEngine.UI {
  class LayoutRebuilder extends System.Object {
    // constructors
    constructor();
    // methods
    IsDestroyed(): boolean;
    static ForceRebuildLayoutImmediate(layoutRoot: UnityEngine.RectTransform): void;
    Rebuild(executing: UnityEngine.UI.CanvasUpdate): void;
    static MarkLayoutForRebuild(rect: UnityEngine.RectTransform): void;
    LayoutComplete(): void;
    GraphicUpdateComplete(): void;
    GetHashCode(): number;
    Equals(obj: any): boolean;
    ToString(): string;
    // properties
    readonly transform: UnityEngine.Transform;
    // fields
  }
}
