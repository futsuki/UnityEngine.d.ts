declare namespace UnityEngine {
  class Hash128 {
    // constructors
    private constructor();
    // methods
    ToString(): string;
    static Parse(hashString: string): UnityEngine.Hash128;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    readonly isValid: boolean;
    // fields
  }
}
