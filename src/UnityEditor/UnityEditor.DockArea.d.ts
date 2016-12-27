declare namespace UnityEditor {
  class DockArea extends UnityEditor.HostView {
    // constructors
    constructor();
    // methods
    OnDestroy(): void;
    OnDestroy(): void;
    OnDestroy(): void;
    OnDestroy(): void;
    OnEnable(): void;
    OnEnable(): void;
    AddTab(pane: UnityEditor.EditorWindow): void;
    AddTab(idx: number, pane: UnityEditor.EditorWindow): void;
    RemoveTab(pane: UnityEditor.EditorWindow): void;
    RemoveTab(pane: UnityEditor.EditorWindow, killIfEmpty: boolean): void;
    DragOver(window: UnityEditor.EditorWindow, mouseScreenPosition: any): UnityEditor.DropInfo;
    PerformDrop(w: UnityEditor.EditorWindow, info: UnityEditor.DropInfo, screenPos: any): boolean;
    OnGUI(): void;
    // properties
    selected: number;
    // fields
  }
}
