declare namespace UnityEngine.UI {
  class Navigation extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Equals(other: UnityEngine.UI.Navigation): boolean;
    Equals(obj: any): boolean;
    // properties
    mode: UnityEngine.UI.Navigation.Mode;
    selectOnUp: UnityEngine.UI.Selectable;
    selectOnDown: UnityEngine.UI.Selectable;
    selectOnLeft: UnityEngine.UI.Selectable;
    selectOnRight: UnityEngine.UI.Selectable;
    static readonly defaultNavigation: UnityEngine.UI.Navigation;
    // fields
  }
}
