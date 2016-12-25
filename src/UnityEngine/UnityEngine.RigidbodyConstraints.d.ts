declare namespace UnityEngine {
  class RigidbodyConstraints {
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
    static None: UnityEngine.RigidbodyConstraints;
    static FreezePositionX: UnityEngine.RigidbodyConstraints;
    static FreezePositionY: UnityEngine.RigidbodyConstraints;
    static FreezePositionZ: UnityEngine.RigidbodyConstraints;
    static FreezeRotationX: UnityEngine.RigidbodyConstraints;
    static FreezeRotationY: UnityEngine.RigidbodyConstraints;
    static FreezeRotationZ: UnityEngine.RigidbodyConstraints;
    static FreezePosition: UnityEngine.RigidbodyConstraints;
    static FreezeRotation: UnityEngine.RigidbodyConstraints;
    static FreezeAll: UnityEngine.RigidbodyConstraints;
  }
}
