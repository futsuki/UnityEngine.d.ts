declare namespace UnityEditor {
  class ModelImporterTangents {
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
    static Import: UnityEditor.ModelImporterTangents;
    static CalculateLegacy: UnityEditor.ModelImporterTangents;
    static CalculateLegacyWithSplitTangents: UnityEditor.ModelImporterTangents;
    static CalculateMikk: UnityEditor.ModelImporterTangents;
    static None: UnityEditor.ModelImporterTangents;
  }
}
