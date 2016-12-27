declare namespace UnityEditor {
  class SplitView extends UnityEditor.View {
    // constructors
    constructor();
    // methods
    AddChild(child: UnityEditor.View, idx: number): void;
    AddChild(child: UnityEditor.View): void;
    RemoveChildNice(child: UnityEditor.View): void;
    RemoveChild(child: UnityEditor.View): void;
    RemoveChild(idx: number): void;
    DragOverRootView(mouseScreenPosition: any): UnityEditor.DropInfo;
    DragOver(w: UnityEditor.EditorWindow, mouseScreenPosition: any): UnityEditor.DropInfo;
    ToString(): string;
    PerformDrop(dropWindow: UnityEditor.EditorWindow, dropInfo: UnityEditor.DropInfo, screenPos: any): boolean;
    Cleanup(): void;
    SplitGUI(evt: any): void;
    // properties
    // fields
    vertical: boolean;
    controlID: number;
  }
}
