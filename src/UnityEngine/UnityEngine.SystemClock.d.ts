declare namespace UnityEngine {
  class SystemClock {
    // constructors
    constructor();
    // methods
    static ToUnixTimeMilliseconds(date: any): number;
    static ToUnixTimeSeconds(date: any): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly now: any;
    // fields
  }
}
