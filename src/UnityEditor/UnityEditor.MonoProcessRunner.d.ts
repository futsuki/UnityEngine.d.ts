declare namespace UnityEditor {
  class MonoProcessRunner {
    // constructors
    constructor();
    // methods
    Run(process: any): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    Output: any;
    Error: any;
  }
}
