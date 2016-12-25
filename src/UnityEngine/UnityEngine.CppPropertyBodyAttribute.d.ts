declare namespace UnityEngine {
  class CppPropertyBodyAttribute {
    // constructors
    constructor(getterBody: string, setterBody: string);
    constructor(getterBody: string);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly TypeId: any;
    // fields
  }
}
