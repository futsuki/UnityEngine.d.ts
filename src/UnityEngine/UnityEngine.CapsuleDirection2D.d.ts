declare namespace UnityEngine {
  class CapsuleDirection2D {
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
    static Vertical: UnityEngine.CapsuleDirection2D;
    static Horizontal: UnityEngine.CapsuleDirection2D;
  }
}
