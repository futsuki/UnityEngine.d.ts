declare namespace JetBrains.Annotations {
  class PublicAPIAttribute {
    // constructors
    constructor();
    constructor(comment: string);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Comment: string;
    readonly TypeId: any;
    // fields
  }
}
