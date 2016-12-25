declare namespace UnityEditor.ModuleUI {
  class VisibilityState {
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
    static NotVisible: UnityEditor.ModuleUI.VisibilityState;
    static VisibleAndFolded: UnityEditor.ModuleUI.VisibilityState;
    static VisibleAndFoldedOut: UnityEditor.ModuleUI.VisibilityState;
  }
}
