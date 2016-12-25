declare namespace UnityEditor.TreeViewExamples.TreeViewTestWindow {
  class TestType {
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
    static LargeTreesWithStandardGUI: UnityEditor.TreeViewExamples.TreeViewTestWindow.TestType;
    static TreeWithCustomItemHeight: UnityEditor.TreeViewExamples.TreeViewTestWindow.TestType;
  }
}
