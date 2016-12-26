declare namespace UnityEngine.UI.InputField {
  class CharacterValidation {
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
    static None: UnityEngine.UI.InputField.CharacterValidation;
    static Integer: UnityEngine.UI.InputField.CharacterValidation;
    static Decimal: UnityEngine.UI.InputField.CharacterValidation;
    static Alphanumeric: UnityEngine.UI.InputField.CharacterValidation;
    static Name: UnityEngine.UI.InputField.CharacterValidation;
    static EmailAddress: UnityEngine.UI.InputField.CharacterValidation;
  }
}
