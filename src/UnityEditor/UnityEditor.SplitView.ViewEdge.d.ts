declare namespace UnityEditor.SplitView {
  class ViewEdge {
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
    static None: UnityEditor.SplitView.ViewEdge;
    static Left: UnityEditor.SplitView.ViewEdge;
    static Bottom: UnityEditor.SplitView.ViewEdge;
    static Top: UnityEditor.SplitView.ViewEdge;
    static Right: UnityEditor.SplitView.ViewEdge;
    static BottomLeft: UnityEditor.SplitView.ViewEdge;
    static BottomRight: UnityEditor.SplitView.ViewEdge;
    static TopLeft: UnityEditor.SplitView.ViewEdge;
    static TopRight: UnityEditor.SplitView.ViewEdge;
    static FitsVertical: UnityEditor.SplitView.ViewEdge;
    static FitsHorizontal: UnityEditor.SplitView.ViewEdge;
    static Before: UnityEditor.SplitView.ViewEdge;
    static After: UnityEditor.SplitView.ViewEdge;
  }
}
