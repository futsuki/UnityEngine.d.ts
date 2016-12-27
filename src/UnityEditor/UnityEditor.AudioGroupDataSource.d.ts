declare namespace UnityEditor {
  class AudioGroupDataSource extends UnityEditor.IMGUI.Controls.TreeViewDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, controller: UnityEditor.Audio.AudioMixerController);
    // methods
    static GetUniqueNodeID(group: UnityEditor.Audio.AudioMixerGroupController): number;
    FetchData(): void;
    IsRenamingItemAllowed(node: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    // properties
    // fields
    m_Controller: UnityEditor.Audio.AudioMixerController;
  }
}
