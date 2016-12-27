declare namespace UnityEditor.TreeViewForAudioMixerGroup {
  class TreeViewDataSourceForMixers extends UnityEditor.IMGUI.Controls.TreeViewDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, ignoreController: UnityEditor.Audio.AudioMixerController);
    // methods
    FetchData(): void;
    CanBeMultiSelected(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    IsRenamingItemAllowed(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    // properties
    readonly ignoreThisController: UnityEditor.Audio.AudioMixerController;
    // fields
  }
}
