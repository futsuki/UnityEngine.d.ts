declare namespace UnityEditor {
  class SplitView {
    // constructors
    constructor();
    // methods
    AddChild(child: UnityEditor.View, idx: number): void;
    RemoveChildNice(child: UnityEditor.View): void;
    RemoveChild(child: UnityEditor.View): void;
    DragOverRootView(mouseScreenPosition: any): UnityEditor.DropInfo;
    DragOver(w: UnityEditor.EditorWindow, mouseScreenPosition: any): UnityEditor.DropInfo;
    ToString(): string;
    PerformDrop(dropWindow: UnityEditor.EditorWindow, dropInfo: UnityEditor.DropInfo, screenPos: any): boolean;
    Cleanup(): void;
    SplitGUI(evt: any): void;
    IndexOfChild(child: UnityEditor.View): number;
    OnDestroy(): void;
    AddChild(child: UnityEditor.View): void;
    RemoveChild(idx: number): void;
    SetDirty(): void;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly minSize: any;
    readonly maxSize: any;
    readonly allChildren: UnityEditor.View[];
    position: any;
    readonly windowPosition: any;
    readonly screenPosition: any;
    readonly window: UnityEditor.ContainerWindow;
    readonly parent: UnityEditor.View;
    readonly children: UnityEditor.View[];
    name: string;
    hideFlags: any;
    // fields
    vertical: boolean;
    controlID: number;
  }
}
