declare namespace UnityEngine {
  class SpaceAttribute {
    // constructors
    constructor();
    constructor(height: number);
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
    height: number;
  }
}
