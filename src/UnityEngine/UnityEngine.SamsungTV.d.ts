declare namespace UnityEngine {
  class SamsungTV {
    // constructors
    constructor();
    // methods
    static SetSystemLanguage(language: UnityEngine.SystemLanguage): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static touchPadMode: UnityEngine.SamsungTV.TouchPadMode;
    static gestureMode: UnityEngine.SamsungTV.GestureMode;
    static readonly airMouseConnected: boolean;
    static readonly gestureWorking: boolean;
    static gamePadMode: UnityEngine.SamsungTV.GamePadMode;
    // fields
  }
}
