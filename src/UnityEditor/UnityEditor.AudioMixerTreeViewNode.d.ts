declare namespace UnityEditor {
  class AudioMixerTreeViewNode extends UnityEditor.IMGUI.Controls.TreeViewItem {
    // constructors
    constructor(instanceID: number, depth: number, parent: UnityEditor.IMGUI.Controls.TreeViewItem, displayName: string, group: UnityEditor.Audio.AudioMixerGroupController);
    // methods
    // properties
    group: UnityEditor.Audio.AudioMixerGroupController;
    // fields
  }
}
