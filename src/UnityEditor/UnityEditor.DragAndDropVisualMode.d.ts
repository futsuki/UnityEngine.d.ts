declare namespace UnityEditor {
  class DragAndDropVisualMode {
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
    static None: UnityEditor.DragAndDropVisualMode;
    static Copy: UnityEditor.DragAndDropVisualMode;
    static Link: UnityEditor.DragAndDropVisualMode;
    static Move: UnityEditor.DragAndDropVisualMode;
    static Generic: UnityEditor.DragAndDropVisualMode;
    static Rejected: UnityEditor.DragAndDropVisualMode;
  }
}
