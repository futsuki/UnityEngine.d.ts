declare namespace UnityEngine {
  class WritableAttribute {
    // constructors
    constructor();
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