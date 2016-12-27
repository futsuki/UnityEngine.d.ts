declare namespace UnityEditor {
  class AudioGroupTreeViewGUI extends UnityEditor.IMGUI.Controls.TreeViewGUI {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController);
    // methods
    OnRowGUI(rowRect: any, node: UnityEditor.IMGUI.Controls.TreeViewItem, row: number, selected: boolean, focused: boolean): void;
    // properties
    // fields
    NodeWasToggled: ((arg1: UnityEditor.AudioMixerTreeViewNode, arg2: boolean) => void);
    m_Controller: UnityEditor.Audio.AudioMixerController;
  }
}
