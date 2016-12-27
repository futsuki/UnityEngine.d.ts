declare namespace UnityEngine.UI {
  class LayoutElement extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    CalculateLayoutInputHorizontal(): void;
    CalculateLayoutInputVertical(): void;
    // properties
    ignoreLayout: boolean;
    minWidth: number;
    minHeight: number;
    preferredWidth: number;
    preferredHeight: number;
    flexibleWidth: number;
    flexibleHeight: number;
    readonly layoutPriority: number;
    // fields
  }
}
