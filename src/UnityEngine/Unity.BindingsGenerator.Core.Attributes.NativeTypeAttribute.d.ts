declare namespace Unity.BindingsGenerator.Core.Attributes {
  class NativeTypeAttribute {
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
    ObjectType: Unity.BindingsGenerator.Core.Attributes.ScriptingObjectType;
    readonly TypeId: any;
    // fields
  }
}
