declare namespace UnityEngine.UI {
  class Navigation {
    // constructors
    private constructor();
    // methods
    Equals(other: UnityEngine.UI.Navigation): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
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
