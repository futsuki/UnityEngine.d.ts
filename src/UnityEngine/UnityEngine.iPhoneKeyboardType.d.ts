declare namespace UnityEngine {
  class iPhoneKeyboardType {
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
    static Default: UnityEngine.iPhoneKeyboardType;
    static ASCIICapable: UnityEngine.iPhoneKeyboardType;
    static NumbersAndPunctuation: UnityEngine.iPhoneKeyboardType;
    static URL: UnityEngine.iPhoneKeyboardType;
    static NumberPad: UnityEngine.iPhoneKeyboardType;
    static PhonePad: UnityEngine.iPhoneKeyboardType;
    static NamePhonePad: UnityEngine.iPhoneKeyboardType;
    static EmailAddress: UnityEngine.iPhoneKeyboardType;
  }
}
