declare namespace UnityEditor {
  class AudioMixerItem {
    // constructors
    constructor(id: number, depth: number, parent: UnityEditor.IMGUI.Controls.TreeViewItem, displayName: string, mixer: UnityEditor.Audio.AudioMixerController, infoText: string);
    // methods
    UpdateSuspendedString(force: boolean): void;
    CompareTo(other: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    mixer: UnityEditor.Audio.AudioMixerController;
    infoText: string;
    labelWidth: number;
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
