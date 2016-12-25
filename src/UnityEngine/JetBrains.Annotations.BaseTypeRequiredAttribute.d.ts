declare namespace JetBrains.Annotations {
  class BaseTypeRequiredAttribute {
    // constructors
    constructor(baseType: any);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly BaseType: any;
    readonly TypeId: any;
    // fields
  }
}
