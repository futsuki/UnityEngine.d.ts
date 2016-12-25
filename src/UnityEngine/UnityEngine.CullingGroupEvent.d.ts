declare namespace UnityEngine {
  class CullingGroupEvent {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly index: number;
    readonly isVisible: boolean;
    readonly wasVisible: boolean;
    readonly hasBecomeVisible: boolean;
    readonly hasBecomeInvisible: boolean;
    readonly currentDistance: number;
    readonly previousDistance: number;
    // fields
  }
}
