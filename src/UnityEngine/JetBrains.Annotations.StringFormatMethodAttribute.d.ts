declare namespace JetBrains.Annotations {
  class StringFormatMethodAttribute {
    // constructors
    constructor(formatParameterName: string);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly FormatParameterName: string;
    readonly TypeId: any;
    // fields
  }
}
