declare namespace UnityEngine.Rendering {
  class SphericalHarmonicsL2 extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Clear(): void;
    AddAmbientLight(color: UnityEngine.Color): void;
    AddDirectionalLight(direction: UnityEngine.Vector3, color: UnityEngine.Color, intensity: number): void;
    GetHashCode(): number;
    Equals(other: any): boolean;
    // properties
    get_Item(rgb: number, coefficient: number): number;
    set_Item(rgb: number, coefficient: number, value: number): void;
    // fields
  }
}
