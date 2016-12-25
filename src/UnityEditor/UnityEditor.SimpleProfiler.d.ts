declare namespace UnityEditor {
  class SimpleProfiler {
    // constructors
    constructor();
    // methods
    static Begin(label: string): any;
    static End(): any;
    static PrintTimes(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
