declare namespace UnityEngine {
  class Resolution {
    // constructors
    private constructor();
    // methods
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    width: number;
    height: number;
    refreshRate: number;
    // fields
  }
}
