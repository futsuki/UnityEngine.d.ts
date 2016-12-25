declare namespace UnityEngine {
  class ClusterInputType {
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
    static Button: UnityEngine.ClusterInputType;
    static Axis: UnityEngine.ClusterInputType;
    static Tracker: UnityEngine.ClusterInputType;
    static CustomProvidedInput: UnityEngine.ClusterInputType;
  }
}
