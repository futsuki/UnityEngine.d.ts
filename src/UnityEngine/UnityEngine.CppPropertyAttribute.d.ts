declare namespace UnityEngine {
  class CppPropertyAttribute {
    // constructors
    constructor(getter: string, setter: string);
    constructor(getter: string);
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
