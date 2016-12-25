declare namespace UnityEngine.Internal {
  class DefaultValueAttribute {
    // constructors
    constructor(value: string);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Value: any;
    readonly TypeId: any;
    // fields
  }
}
