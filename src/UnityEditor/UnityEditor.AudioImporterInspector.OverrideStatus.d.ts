declare namespace UnityEditor.AudioImporterInspector {
  class OverrideStatus {
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
    static NoOverrides: UnityEditor.AudioImporterInspector.OverrideStatus;
    static MixedOverrides: UnityEditor.AudioImporterInspector.OverrideStatus;
    static AllOverrides: UnityEditor.AudioImporterInspector.OverrideStatus;
  }
}
