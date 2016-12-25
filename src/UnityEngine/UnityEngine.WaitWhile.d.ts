declare namespace UnityEngine {
  class WaitWhile {
    // constructors
    constructor(predicate: any);
    // methods
    MoveNext(): boolean;
    Reset(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly keepWaiting: boolean;
    readonly Current: any;
    // fields
  }
}
