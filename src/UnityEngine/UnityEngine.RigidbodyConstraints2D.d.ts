declare namespace UnityEngine {
  class RigidbodyConstraints2D {
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
    static None: UnityEngine.RigidbodyConstraints2D;
    static FreezePositionX: UnityEngine.RigidbodyConstraints2D;
    static FreezePositionY: UnityEngine.RigidbodyConstraints2D;
    static FreezeRotation: UnityEngine.RigidbodyConstraints2D;
    static FreezePosition: UnityEngine.RigidbodyConstraints2D;
    static FreezeAll: UnityEngine.RigidbodyConstraints2D;
  }
}
