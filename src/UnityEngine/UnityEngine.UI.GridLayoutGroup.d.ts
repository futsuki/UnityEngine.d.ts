declare namespace UnityEngine.UI {
  class GridLayoutGroup extends UnityEngine.UI.LayoutGroup {
    // constructors
    protected constructor();
    // methods
    CalculateLayoutInputHorizontal(): void;
    CalculateLayoutInputVertical(): void;
    SetLayoutHorizontal(): void;
    SetLayoutVertical(): void;
    // properties
    startCorner: UnityEngine.UI.GridLayoutGroup.Corner;
    startAxis: UnityEngine.UI.GridLayoutGroup.Axis;
    cellSize: UnityEngine.Vector2;
    spacing: UnityEngine.Vector2;
    constraint: UnityEngine.UI.GridLayoutGroup.Constraint;
    constraintCount: number;
    // fields
  }
}
