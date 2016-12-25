declare namespace UnityEditor {
  class ShowMode {
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
    static NormalWindow: UnityEditor.ShowMode;
    static PopupMenu: UnityEditor.ShowMode;
    static Utility: UnityEditor.ShowMode;
    static NoShadow: UnityEditor.ShowMode;
    static MainWindow: UnityEditor.ShowMode;
    static AuxWindow: UnityEditor.ShowMode;
    static PopupMenuWithKeyboardFocus: UnityEditor.ShowMode;
  }
}
