declare namespace UnityEditor {
  class ApiCompatibilityLevel {
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
    static NET_2_0: UnityEditor.ApiCompatibilityLevel;
    static NET_2_0_Subset: UnityEditor.ApiCompatibilityLevel;
  }
}
