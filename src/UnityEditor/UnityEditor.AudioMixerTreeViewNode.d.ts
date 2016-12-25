declare namespace UnityEditor {
  class AudioMixerTreeViewNode {
    // constructors
    constructor(instanceID: number, depth: number, parent: UnityEditor.IMGUI.Controls.TreeViewItem, displayName: string, group: UnityEditor.Audio.AudioMixerGroupController);
    // methods
    CompareTo(other: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    group: UnityEditor.Audio.AudioMixerGroupController;
    id: number;
    displayName: string;
    depth: number;
    readonly hasChildren: boolean;
    children: any;
    parent: UnityEditor.IMGUI.Controls.TreeViewItem;
    icon: any;
    // fields
  }
}
