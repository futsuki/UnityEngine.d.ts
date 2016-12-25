declare namespace UnityEngine {
  class RotationOrder {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static OrderXYZ: UnityEngine.RotationOrder;
    static OrderXZY: UnityEngine.RotationOrder;
    static OrderYZX: UnityEngine.RotationOrder;
    static OrderYXZ: UnityEngine.RotationOrder;
    static OrderZXY: UnityEngine.RotationOrder;
    static OrderZYX: UnityEngine.RotationOrder;
  }
}
