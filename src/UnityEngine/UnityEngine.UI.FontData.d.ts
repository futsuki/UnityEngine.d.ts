declare namespace UnityEngine.UI {
  class FontData {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly defaultFontData: UnityEngine.UI.FontData;
    font: UnityEngine.Font;
    fontSize: number;
    fontStyle: UnityEngine.FontStyle;
    bestFit: boolean;
    minSize: number;
    maxSize: number;
    alignment: UnityEngine.TextAnchor;
    alignByGeometry: boolean;
    richText: boolean;
    horizontalOverflow: UnityEngine.HorizontalWrapMode;
    verticalOverflow: UnityEngine.VerticalWrapMode;
    lineSpacing: number;
    // fields
  }
}
