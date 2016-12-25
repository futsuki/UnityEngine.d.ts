declare namespace JetBrains.Annotations {
  class PathReferenceAttribute {
    // constructors
    constructor();
    constructor(basePath: string);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly BasePath: string;
    readonly TypeId: any;
    // fields
  }
}
