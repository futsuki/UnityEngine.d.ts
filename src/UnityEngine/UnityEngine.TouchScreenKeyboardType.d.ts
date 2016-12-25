declare namespace UnityEngine {
  class TouchScreenKeyboardType {
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
    static Default: UnityEngine.TouchScreenKeyboardType;
    static ASCIICapable: UnityEngine.TouchScreenKeyboardType;
    static NumbersAndPunctuation: UnityEngine.TouchScreenKeyboardType;
    static URL: UnityEngine.TouchScreenKeyboardType;
    static NumberPad: UnityEngine.TouchScreenKeyboardType;
    static PhonePad: UnityEngine.TouchScreenKeyboardType;
    static NamePhonePad: UnityEngine.TouchScreenKeyboardType;
    static EmailAddress: UnityEngine.TouchScreenKeyboardType;
    static NintendoNetworkAccount: UnityEngine.TouchScreenKeyboardType;
  }
}
