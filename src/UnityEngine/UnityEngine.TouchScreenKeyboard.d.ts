declare namespace UnityEngine {
  class TouchScreenKeyboard {
    // constructors
    constructor(text: string, keyboardType: UnityEngine.TouchScreenKeyboardType, autocorrection: boolean, multiline: boolean, secure: boolean, alert: boolean, textPlaceholder: string);
    // methods
    static Open(text: string, keyboardType: UnityEngine.TouchScreenKeyboardType, autocorrection: boolean, multiline: boolean, secure: boolean, alert: boolean): UnityEngine.TouchScreenKeyboard;
    static Open(text: string, keyboardType: UnityEngine.TouchScreenKeyboardType, autocorrection: boolean, multiline: boolean, secure: boolean): UnityEngine.TouchScreenKeyboard;
    static Open(text: string, keyboardType: UnityEngine.TouchScreenKeyboardType, autocorrection: boolean, multiline: boolean): UnityEngine.TouchScreenKeyboard;
    static Open(text: string, keyboardType: UnityEngine.TouchScreenKeyboardType, autocorrection: boolean): UnityEngine.TouchScreenKeyboard;
    static Open(text: string, keyboardType: UnityEngine.TouchScreenKeyboardType): UnityEngine.TouchScreenKeyboard;
    static Open(text: string): UnityEngine.TouchScreenKeyboard;
    static Open(text: string, keyboardType: UnityEngine.TouchScreenKeyboardType, autocorrection: boolean, multiline: boolean, secure: boolean, alert: boolean, textPlaceholder: string): UnityEngine.TouchScreenKeyboard;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly isSupported: boolean;
    text: string;
    static hideInput: boolean;
    active: boolean;
    readonly done: boolean;
    readonly wasCanceled: boolean;
    targetDisplay: number;
    static readonly area: UnityEngine.Rect;
    static readonly visible: boolean;
    // fields
  }
}
