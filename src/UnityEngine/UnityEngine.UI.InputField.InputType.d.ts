declare namespace UnityEngine.UI.InputField {
  class InputType {
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
    static Standard: UnityEngine.UI.InputField.InputType;
    static AutoCorrect: UnityEngine.UI.InputField.InputType;
    static Password: UnityEngine.UI.InputField.InputType;
  }
}
