declare namespace UnityEditor {
  class SimpleProfiler {
    // constructors
    constructor();
    // methods
    static Begin(label: string): void;
    static End(): void;
    static PrintTimes(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
