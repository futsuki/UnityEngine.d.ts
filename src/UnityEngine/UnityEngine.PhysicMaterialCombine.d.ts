declare namespace UnityEngine {
  class PhysicMaterialCombine {
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
    static Average: UnityEngine.PhysicMaterialCombine;
    static Minimum: UnityEngine.PhysicMaterialCombine;
    static Multiply: UnityEngine.PhysicMaterialCombine;
    static Maximum: UnityEngine.PhysicMaterialCombine;
  }
}
