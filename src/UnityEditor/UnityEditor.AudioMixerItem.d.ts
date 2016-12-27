declare namespace UnityEditor {
  class AudioMixerItem extends UnityEditor.IMGUI.Controls.TreeViewItem {
    // constructors
    constructor(id: number, depth: number, parent: UnityEditor.IMGUI.Controls.TreeViewItem, displayName: string, mixer: UnityEditor.Audio.AudioMixerController, infoText: string);
    // methods
    UpdateSuspendedString(force: boolean): void;
    // properties
    mixer: UnityEditor.Audio.AudioMixerController;
    infoText: string;
    labelWidth: number;
    // fields
  }
}
