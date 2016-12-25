declare namespace UnityEngine {
  class MultilineAttribute {
    // constructors
    constructor();
    constructor(lines: number);
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
    lines: number;
  }
}
