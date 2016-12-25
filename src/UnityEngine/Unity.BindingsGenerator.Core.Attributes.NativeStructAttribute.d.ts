declare namespace Unity.BindingsGenerator.Core.Attributes {
  class NativeStructAttribute {
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
    GenerateMarshallingType: Unity.BindingsGenerator.Core.Attributes.NativeStructGenerateOption;
    readonly TypeId: any;
    // fields
  }
}
