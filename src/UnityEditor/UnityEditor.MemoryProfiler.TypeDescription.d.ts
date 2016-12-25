declare namespace UnityEditor.MemoryProfiler {
  class TypeDescription {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly isValueType: boolean;
    readonly isArray: boolean;
    readonly arrayRank: number;
    readonly name: string;
    readonly assembly: string;
    readonly fields: UnityEditor.MemoryProfiler.FieldDescription[];
    readonly staticFieldBytes: number[];
    readonly baseOrElementTypeIndex: number;
    readonly size: number;
    readonly typeInfoAddress: number;
    readonly typeIndex: number;
    // fields
  }
}
