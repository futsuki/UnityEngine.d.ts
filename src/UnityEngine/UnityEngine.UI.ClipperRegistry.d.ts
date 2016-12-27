declare namespace UnityEngine.UI {
  class ClipperRegistry extends System.Object {
    // constructors
    protected constructor();
    // methods
    Cull(): void;
    static Register(c: UnityEngine.UI.IClipper): void;
    static Unregister(c: UnityEngine.UI.IClipper): void;
    // properties
    static readonly instance: UnityEngine.UI.ClipperRegistry;
    // fields
  }
}
