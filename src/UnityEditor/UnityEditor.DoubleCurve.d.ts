declare namespace UnityEditor {
  class DoubleCurve {
    // constructors
    constructor(minCurve: any, maxCurve: any, signedRange: boolean);
    // methods
    IsSingleCurve(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    minCurve: any;
    maxCurve: any;
    signedRange: boolean;
    // fields
  }
}
