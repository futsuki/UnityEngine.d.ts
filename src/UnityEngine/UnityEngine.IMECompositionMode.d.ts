declare namespace UnityEngine {
  class IMECompositionMode {
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
    static Auto: UnityEngine.IMECompositionMode;
    static On: UnityEngine.IMECompositionMode;
    static Off: UnityEngine.IMECompositionMode;
  }
}
