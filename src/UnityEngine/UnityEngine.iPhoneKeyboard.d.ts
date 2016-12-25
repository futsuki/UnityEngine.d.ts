declare namespace UnityEngine {
  class iPhoneKeyboard {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    text: string;
    static hideInput: boolean;
    active: boolean;
    readonly done: boolean;
    static readonly area: UnityEngine.Rect;
    static readonly visible: boolean;
    // fields
  }
}
