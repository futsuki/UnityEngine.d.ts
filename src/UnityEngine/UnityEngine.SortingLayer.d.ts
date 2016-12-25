declare namespace UnityEngine {
  class SortingLayer {
    // constructors
    private constructor();
    // methods
    static GetLayerValueFromID(id: number): number;
    static GetLayerValueFromName(name: string): number;
    static NameToID(name: string): number;
    static IDToName(id: number): string;
    static IsValid(id: number): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly id: number;
    readonly name: string;
    readonly value: number;
    static readonly layers: UnityEngine.SortingLayer[];
    // fields
  }
}
