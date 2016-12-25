declare namespace UnityEngine {
  class SpriteAlignment {
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
    static Center: UnityEngine.SpriteAlignment;
    static TopLeft: UnityEngine.SpriteAlignment;
    static TopCenter: UnityEngine.SpriteAlignment;
    static TopRight: UnityEngine.SpriteAlignment;
    static LeftCenter: UnityEngine.SpriteAlignment;
    static RightCenter: UnityEngine.SpriteAlignment;
    static BottomLeft: UnityEngine.SpriteAlignment;
    static BottomCenter: UnityEngine.SpriteAlignment;
    static BottomRight: UnityEngine.SpriteAlignment;
    static Custom: UnityEngine.SpriteAlignment;
  }
}
