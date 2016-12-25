declare namespace UnityEditor.MemoryProfiler {
  class FieldDescription {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly name: string;
    readonly offset: number;
    readonly typeIndex: number;
    readonly isStatic: boolean;
    // fields
  }
}
