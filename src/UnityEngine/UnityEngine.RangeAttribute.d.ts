declare namespace UnityEngine {
  class RangeAttribute {
    // constructors
    constructor(min: number, max: number);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    order: number;
    readonly TypeId: any;
    // fields
    min: number;
    max: number;
  }
}
