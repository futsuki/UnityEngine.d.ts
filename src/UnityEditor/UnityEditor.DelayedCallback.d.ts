declare namespace UnityEditor {
  class DelayedCallback {
    // constructors
    constructor(function_: any, timeFromNow: number);
    // methods
    Clear(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
