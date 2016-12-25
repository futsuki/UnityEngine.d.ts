declare namespace UnityEditor {
  class LookDevProperty {
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
    static ExposureValue: UnityEditor.LookDevProperty;
    static HDRI: UnityEditor.LookDevProperty;
    static ShadingMode: UnityEditor.LookDevProperty;
    static EnvRotation: UnityEditor.LookDevProperty;
    static LoDIndex: UnityEditor.LookDevProperty;
    static Count: UnityEditor.LookDevProperty;
  }
}
