declare namespace UnityEngine {
  class LayerMask {
    // constructors
    private constructor();
    // methods
    static LayerToName(layer: number): string;
    static NameToLayer(layerName: string): number;
    static GetMask(layerNames: string[]): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    value: number;
    // fields
  }
}
