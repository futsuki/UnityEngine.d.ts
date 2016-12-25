declare namespace UnityEditor.IMGUI.Controls {
  class TreeViewSelectionOptions {
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
    static None: UnityEditor.IMGUI.Controls.TreeViewSelectionOptions;
    static FireSelectionChanged: UnityEditor.IMGUI.Controls.TreeViewSelectionOptions;
    static RevealAndFrame: UnityEditor.IMGUI.Controls.TreeViewSelectionOptions;
  }
}
