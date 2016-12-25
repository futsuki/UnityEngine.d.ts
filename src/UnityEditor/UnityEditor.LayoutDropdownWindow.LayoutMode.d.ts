declare namespace UnityEditor.LayoutDropdownWindow {
  class LayoutMode {
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
    static Undefined: UnityEditor.LayoutDropdownWindow.LayoutMode;
    static Min: UnityEditor.LayoutDropdownWindow.LayoutMode;
    static Middle: UnityEditor.LayoutDropdownWindow.LayoutMode;
    static Max: UnityEditor.LayoutDropdownWindow.LayoutMode;
    static Stretch: UnityEditor.LayoutDropdownWindow.LayoutMode;
  }
}
