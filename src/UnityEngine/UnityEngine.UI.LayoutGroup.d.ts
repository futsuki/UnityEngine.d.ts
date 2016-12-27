declare namespace UnityEngine.UI {
  class LayoutGroup extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    CalculateLayoutInputHorizontal(): void;
    CalculateLayoutInputVertical(): void;
    SetLayoutHorizontal(): void;
    SetLayoutVertical(): void;
    // properties
    padding: UnityEngine.RectOffset;
    childAlignment: UnityEngine.TextAnchor;
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
