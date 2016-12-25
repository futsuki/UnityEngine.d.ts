declare namespace UnityEditor.EditorGUIExt {
  class DragSelectionState {
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
    static None: UnityEditor.EditorGUIExt.DragSelectionState;
    static DragSelecting: UnityEditor.EditorGUIExt.DragSelectionState;
    static Dragging: UnityEditor.EditorGUIExt.DragSelectionState;
  }
}
