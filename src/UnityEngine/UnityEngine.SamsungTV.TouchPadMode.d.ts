declare namespace UnityEngine.SamsungTV {
  class TouchPadMode {
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
    static Dpad: UnityEngine.SamsungTV.TouchPadMode;
    static Joystick: UnityEngine.SamsungTV.TouchPadMode;
    static Mouse: UnityEngine.SamsungTV.TouchPadMode;
  }
}
