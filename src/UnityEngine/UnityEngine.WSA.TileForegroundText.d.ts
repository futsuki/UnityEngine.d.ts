declare namespace UnityEngine.WSA {
  class TileForegroundText {
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
    static Default: UnityEngine.WSA.TileForegroundText;
    static Dark: UnityEngine.WSA.TileForegroundText;
    static Light: UnityEngine.WSA.TileForegroundText;
  }
}
