declare namespace UnityEditor {
  class ModelImporterMaterialName {
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
    static BasedOnTextureName: UnityEditor.ModelImporterMaterialName;
    static BasedOnMaterialName: UnityEditor.ModelImporterMaterialName;
    static BasedOnModelNameAndMaterialName: UnityEditor.ModelImporterMaterialName;
    static BasedOnTextureName_Or_ModelNameAndMaterialName: UnityEditor.ModelImporterMaterialName;
  }
}
