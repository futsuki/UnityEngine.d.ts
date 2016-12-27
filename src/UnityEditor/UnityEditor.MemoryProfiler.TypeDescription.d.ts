declare namespace UnityEditor.MemoryProfiler {
  class TypeDescription extends System.ValueType {
    // constructors
    protected constructor();
    // methods
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
