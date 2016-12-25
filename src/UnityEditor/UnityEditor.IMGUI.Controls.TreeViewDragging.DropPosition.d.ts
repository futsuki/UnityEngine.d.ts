declare namespace UnityEditor.IMGUI.Controls.TreeViewDragging {
  class DropPosition {
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
    static Upon: UnityEditor.IMGUI.Controls.TreeViewDragging.DropPosition;
    static Below: UnityEditor.IMGUI.Controls.TreeViewDragging.DropPosition;
    static Above: UnityEditor.IMGUI.Controls.TreeViewDragging.DropPosition;
  }
}
