declare namespace UnityEngine {
  class WaitForSecondsRealtime {
    // constructors
    constructor(time: number);
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