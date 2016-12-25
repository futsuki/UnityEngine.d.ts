declare namespace UnityEditor {
  class AudioMixersTreeView {
    // constructors
    constructor(mixerWindow: UnityEditor.AudioMixerWindow, treeState: UnityEditor.IMGUI.Controls.TreeViewState, getAllControllersCallback: any);
    // methods
    ReloadTree(): any;
    OnMixerControllerChanged(controller: UnityEditor.Audio.AudioMixerController): any;
    DeleteAudioMixerCallback(obj: any): any;
    OnTreeViewContextClick(index: number): any;
    OnTreeSelectionChanged(selection: number[]): any;
    GetTotalHeight(): number;
    OnGUI(rect: any): any;
    EndRenaming(): any;
    OnUndoRedoPerformed(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
