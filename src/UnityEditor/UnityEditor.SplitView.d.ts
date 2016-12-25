declare namespace UnityEditor {
  class SplitView {
    // constructors
    constructor();
    // methods
    AddChild(child: UnityEditor.View, idx: number): any;
    RemoveChildNice(child: UnityEditor.View): any;
    RemoveChild(child: UnityEditor.View): any;
    DragOverRootView(mouseScreenPosition: any): UnityEditor.DropInfo;
    DragOver(w: UnityEditor.EditorWindow, mouseScreenPosition: any): UnityEditor.DropInfo;
    ToString(): string;
    PerformDrop(dropWindow: UnityEditor.EditorWindow, dropInfo: UnityEditor.DropInfo, screenPos: any): boolean;
    Cleanup(): any;
    SplitGUI(evt: any): any;
    IndexOfChild(child: UnityEditor.View): number;
    OnDestroy(): any;
    AddChild(child: UnityEditor.View): any;
    RemoveChild(idx: number): any;
    SetDirty(): any;
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
