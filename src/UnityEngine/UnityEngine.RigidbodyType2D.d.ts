declare namespace UnityEngine {
  class RigidbodyType2D {
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
    static Dynamic: UnityEngine.RigidbodyType2D;
    static Kinematic: UnityEngine.RigidbodyType2D;
    static Static: UnityEngine.RigidbodyType2D;
  }
}
