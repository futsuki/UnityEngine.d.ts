declare namespace UnityEngine.UI.InputField {
  class ContentType {
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
    static Standard: UnityEngine.UI.InputField.ContentType;
    static Autocorrected: UnityEngine.UI.InputField.ContentType;
    static IntegerNumber: UnityEngine.UI.InputField.ContentType;
    static DecimalNumber: UnityEngine.UI.InputField.ContentType;
    static Alphanumeric: UnityEngine.UI.InputField.ContentType;
    static Name: UnityEngine.UI.InputField.ContentType;
    static EmailAddress: UnityEngine.UI.InputField.ContentType;
    static Password: UnityEngine.UI.InputField.ContentType;
    static Pin: UnityEngine.UI.InputField.ContentType;
    static Custom: UnityEngine.UI.InputField.ContentType;
  }
}
