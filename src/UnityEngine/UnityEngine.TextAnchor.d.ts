declare namespace UnityEngine {
  class TextAnchor {
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
    static UpperLeft: UnityEngine.TextAnchor;
    static UpperCenter: UnityEngine.TextAnchor;
    static UpperRight: UnityEngine.TextAnchor;
    static MiddleLeft: UnityEngine.TextAnchor;
    static MiddleCenter: UnityEngine.TextAnchor;
    static MiddleRight: UnityEngine.TextAnchor;
    static LowerLeft: UnityEngine.TextAnchor;
    static LowerCenter: UnityEngine.TextAnchor;
    static LowerRight: UnityEngine.TextAnchor;
  }
}
