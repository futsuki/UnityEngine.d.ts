declare namespace UnityEngine.UI {
  class ClipperRegistry {
    // constructors
    private constructor();
    // methods
    Cull(): void;
    static Register(c: UnityEngine.UI.IClipper): void;
    static Unregister(c: UnityEngine.UI.IClipper): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly instance: UnityEngine.UI.ClipperRegistry;
    // fields
  }
}
