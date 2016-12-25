declare namespace UnityEngine.SamsungTV {
  class GestureMode {
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
    static Off: UnityEngine.SamsungTV.GestureMode;
    static Mouse: UnityEngine.SamsungTV.GestureMode;
    static Joystick: UnityEngine.SamsungTV.GestureMode;
  }
}
