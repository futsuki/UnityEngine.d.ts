declare namespace UnityEngine {
  class OperatingSystemFamily {
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
    static Other: UnityEngine.OperatingSystemFamily;
    static MacOSX: UnityEngine.OperatingSystemFamily;
    static Windows: UnityEngine.OperatingSystemFamily;
    static Linux: UnityEngine.OperatingSystemFamily;
  }
}
