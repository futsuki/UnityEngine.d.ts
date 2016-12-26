declare namespace UnityEngine.UI {
  class ICanvasElement {
    // constructors
    private constructor();
    // methods
    Rebuild(executing: UnityEngine.UI.CanvasUpdate): void;
    LayoutComplete(): void;
    GraphicUpdateComplete(): void;
    IsDestroyed(): boolean;
    // properties
    readonly transform: UnityEngine.Transform;
    // fields
  }
}
