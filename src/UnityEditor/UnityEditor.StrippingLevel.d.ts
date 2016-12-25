declare namespace UnityEditor {
  class StrippingLevel {
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
    static Disabled: UnityEditor.StrippingLevel;
    static StripAssemblies: UnityEditor.StrippingLevel;
    static StripByteCode: UnityEditor.StrippingLevel;
    static UseMicroMSCorlib: UnityEditor.StrippingLevel;
  }
}
