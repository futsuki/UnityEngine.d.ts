declare namespace Unity.BindingsGenerator.Core.Attributes {
  class NativeStructGenerateOption {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Default: Unity.BindingsGenerator.Core.Attributes.NativeStructGenerateOption;
    static UseCustomStruct: Unity.BindingsGenerator.Core.Attributes.NativeStructGenerateOption;
    static ForceGenerate: Unity.BindingsGenerator.Core.Attributes.NativeStructGenerateOption;
  }
}
