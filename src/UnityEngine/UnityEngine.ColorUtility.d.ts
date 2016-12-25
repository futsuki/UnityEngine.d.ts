declare namespace UnityEngine {
  class ColorUtility {
    // constructors
    constructor();
    // methods
    static TryParseHtmlString(htmlString: string, color: any): boolean;
    static ToHtmlStringRGB(color: UnityEngine.Color): string;
    static ToHtmlStringRGBA(color: UnityEngine.Color): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
