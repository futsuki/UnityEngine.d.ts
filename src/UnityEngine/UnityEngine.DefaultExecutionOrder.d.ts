declare namespace UnityEngine {
  class DefaultExecutionOrder {
    // constructors
    constructor(order: number);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly order: number;
    readonly TypeId: any;
    // fields
  }
}
