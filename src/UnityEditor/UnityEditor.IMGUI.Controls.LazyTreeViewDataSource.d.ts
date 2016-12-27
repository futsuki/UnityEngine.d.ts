declare namespace UnityEditor.IMGUI.Controls {
  class LazyTreeViewDataSource extends UnityEditor.IMGUI.Controls.TreeViewDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController);
    // methods
    static CreateChildListForCollapsedParent(): UnityEditor.IMGUI.Controls.TreeViewItem[];
    static IsChildListForACollapsedParent(childList: UnityEditor.IMGUI.Controls.TreeViewItem[]): boolean;
    RevealItem(itemID: number): void;
    FindItem(itemID: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    SetExpandedWithChildren(item: UnityEditor.IMGUI.Controls.TreeViewItem, expand: boolean): void;
    SetExpandedWithChildren(id: number, expand: boolean): void;
    InitIfNeeded(): void;
    GetRows(): UnityEditor.IMGUI.Controls.TreeViewItem[];
    // properties
    // fields
  }
}
