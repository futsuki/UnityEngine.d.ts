declare namespace Unity.BindingsGenerator.Core.Attributes {
  class NativeEnumAttribute {
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
    Name: string;
    Header: string;
    GenerateNativeType: boolean;
    readonly TypeId: any;
    // fields
  }
}
