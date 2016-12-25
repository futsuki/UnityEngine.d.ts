declare namespace UnityEngine {
  class UnityString {
    // constructors
    constructor();
    // methods
    static Format(fmt: string, args: any[]): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
