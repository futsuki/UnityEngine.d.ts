declare namespace UnityEngine.UI {
  class ICanvasElement {
    // constructors
    protected constructor();
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
