declare namespace UnityEngine {
  class WaitUntil {
    // constructors
    constructor(predicate: (() => boolean));
    // methods
    MoveNext(): boolean;
    Reset(): void;
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
