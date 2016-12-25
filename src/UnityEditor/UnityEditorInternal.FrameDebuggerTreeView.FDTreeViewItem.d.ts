declare namespace UnityEditorInternal.FrameDebuggerTreeView {
  class FDTreeViewItem {
    // constructors
    constructor(id: number, depth: number, parent: UnityEditorInternal.FrameDebuggerTreeView.FDTreeViewItem, displayName: string);
    // methods
    CompareTo(other: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    id: number;
    displayName: string;
    depth: number;
    readonly hasChildren: boolean;
    children: any;
    parent: UnityEditor.IMGUI.Controls.TreeViewItem;
    icon: any;
    // fields
    m_FrameEvent: UnityEditorInternal.FrameDebuggerEvent;
    m_ChildEventCount: number;
    m_EventIndex: number;
  }
}
