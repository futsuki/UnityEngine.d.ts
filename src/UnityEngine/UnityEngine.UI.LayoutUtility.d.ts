declare namespace UnityEngine.UI {
  class LayoutUtility {
    // constructors
    private constructor();
    // methods
    static GetMinSize(rect: UnityEngine.RectTransform, axis: number): number;
    static GetPreferredSize(rect: UnityEngine.RectTransform, axis: number): number;
    static GetFlexibleSize(rect: UnityEngine.RectTransform, axis: number): number;
    static GetMinWidth(rect: UnityEngine.RectTransform): number;
    static GetPreferredWidth(rect: UnityEngine.RectTransform): number;
    static GetFlexibleWidth(rect: UnityEngine.RectTransform): number;
    static GetMinHeight(rect: UnityEngine.RectTransform): number;
    static GetPreferredHeight(rect: UnityEngine.RectTransform): number;
    static GetFlexibleHeight(rect: UnityEngine.RectTransform): number;
    static GetLayoutProperty(rect: UnityEngine.RectTransform, property: ((UnityEngine.UI.ILayoutElement) => number), defaultValue: number): number;
    static GetLayoutProperty(rect: UnityEngine.RectTransform, property: ((UnityEngine.UI.ILayoutElement) => number), defaultValue: number, source: any): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
