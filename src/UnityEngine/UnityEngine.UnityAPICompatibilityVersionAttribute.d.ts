declare namespace UnityEngine {
  class UnityAPICompatibilityVersionAttribute {
    // constructors
    constructor(version: string);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly version: string;
    readonly TypeId: any;
    // fields
  }
}
