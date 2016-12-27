declare namespace UnityEngine {
  class Hash128 extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    ToString(): string;
    static Parse(hashString: string): UnityEngine.Hash128;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    // properties
    readonly isValid: boolean;
    // fields
  }
}
