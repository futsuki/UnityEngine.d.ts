declare namespace UnityEngine.Terrain {
  class MaterialType {
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
    static BuiltInStandard: UnityEngine.Terrain.MaterialType;
    static BuiltInLegacyDiffuse: UnityEngine.Terrain.MaterialType;
    static BuiltInLegacySpecular: UnityEngine.Terrain.MaterialType;
    static Custom: UnityEngine.Terrain.MaterialType;
  }
}
