declare namespace JetBrains.Annotations {
  class LocalizationRequiredAttribute {
    // constructors
    constructor();
    constructor(required: boolean);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Required: boolean;
    readonly TypeId: any;
    // fields
  }
}
