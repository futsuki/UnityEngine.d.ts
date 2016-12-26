declare namespace UnityEngine.UI {
  class ColorBlock {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    Equals(other: UnityEngine.UI.ColorBlock): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    normalColor: UnityEngine.Color;
    highlightedColor: UnityEngine.Color;
    pressedColor: UnityEngine.Color;
    disabledColor: UnityEngine.Color;
    colorMultiplier: number;
    fadeDuration: number;
    static readonly defaultColorBlock: UnityEngine.UI.ColorBlock;
    // fields
  }
}
