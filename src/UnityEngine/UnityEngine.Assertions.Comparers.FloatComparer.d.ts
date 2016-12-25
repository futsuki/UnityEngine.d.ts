declare namespace UnityEngine.Assertions.Comparers {
  class FloatComparer {
    // constructors
    constructor();
    constructor(relative: boolean);
    constructor(error: number);
    constructor(error: number, relative: boolean);
    // methods
    Equals(a: number, b: number): boolean;
    GetHashCode(obj: number): number;
    static AreEqual(expected: number, actual: number, error: number): boolean;
    static AreEqualRelative(expected: number, actual: number, error: number): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static s_ComparerWithDefaultTolerance: UnityEngine.Assertions.Comparers.FloatComparer;
    static kEpsilon: number;
  }
}
