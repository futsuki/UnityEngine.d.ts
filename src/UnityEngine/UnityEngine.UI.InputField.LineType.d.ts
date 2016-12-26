declare namespace UnityEngine.UI.InputField {
  class LineType {
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
    static SingleLine: UnityEngine.UI.InputField.LineType;
    static MultiLineSubmit: UnityEngine.UI.InputField.LineType;
    static MultiLineNewline: UnityEngine.UI.InputField.LineType;
  }
}
