declare namespace UnityEngine {
  class LayerMask extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static LayerToName(layer: number): string;
    static NameToLayer(layerName: string): number;
    static GetMask(layerNames: string[]): number;
    // properties
    value: number;
    // fields
  }
}
