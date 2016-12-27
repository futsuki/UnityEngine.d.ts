declare namespace UnityEngine.UI {
  class ILayoutElement {
    // constructors
    protected constructor();
    // methods
    CalculateLayoutInputHorizontal(): void;
    CalculateLayoutInputVertical(): void;
    // properties
    readonly minWidth: number;
    readonly preferredWidth: number;
    readonly flexibleWidth: number;
    readonly minHeight: number;
    readonly preferredHeight: number;
    readonly flexibleHeight: number;
    readonly layoutPriority: number;
    // fields
  }
}
