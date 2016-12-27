declare namespace UnityEditor {
  class AudioMixersDataSource extends UnityEditor.IMGUI.Controls.TreeViewDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, getAllControllersCallback: (() => UnityEditor.Audio.AudioMixerController[]));
    // methods
    FetchData(): void;
    IsRenamingItemAllowed(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    GetInsertAfterItemIDForNewItem(newName: string, parentItem: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    InsertFakeItem(id: number, parentID: number, name: string, icon: any): void;
    // properties
    // fields
  }
}
