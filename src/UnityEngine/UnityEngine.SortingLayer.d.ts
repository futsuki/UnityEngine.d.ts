declare namespace UnityEngine {
  class SortingLayer extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static GetLayerValueFromID(id: number): number;
    static GetLayerValueFromName(name: string): number;
    static NameToID(name: string): number;
    static IDToName(id: number): string;
    static IsValid(id: number): boolean;
    // properties
    readonly id: number;
    readonly name: string;
    readonly value: number;
    static readonly layers: UnityEngine.SortingLayer[];
    // fields
  }
}
