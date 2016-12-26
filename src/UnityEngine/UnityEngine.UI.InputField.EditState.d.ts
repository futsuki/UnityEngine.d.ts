declare namespace UnityEngine.UI.InputField {
  class EditState {
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
    static Continue: UnityEngine.UI.InputField.EditState;
    static Finish: UnityEngine.UI.InputField.EditState;
  }
}
