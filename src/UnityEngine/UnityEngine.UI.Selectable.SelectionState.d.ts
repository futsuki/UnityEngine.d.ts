declare namespace UnityEngine.UI.Selectable {
  class SelectionState {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Normal: UnityEngine.UI.Selectable.SelectionState;
    static Highlighted: UnityEngine.UI.Selectable.SelectionState;
    static Pressed: UnityEngine.UI.Selectable.SelectionState;
    static Disabled: UnityEngine.UI.Selectable.SelectionState;
  }
}
