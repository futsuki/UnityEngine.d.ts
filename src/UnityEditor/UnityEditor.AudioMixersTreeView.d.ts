declare namespace UnityEditor {
  class AudioMixersTreeView extends System.Object {
    // constructors
    constructor(mixerWindow: UnityEditor.AudioMixerWindow, treeState: UnityEditor.IMGUI.Controls.TreeViewState, getAllControllersCallback: (() => UnityEditor.Audio.AudioMixerController[]));
    // methods
    ReloadTree(): void;
    OnMixerControllerChanged(controller: UnityEditor.Audio.AudioMixerController): void;
    DeleteAudioMixerCallback(obj: any): void;
    OnTreeViewContextClick(index: number): void;
    OnTreeSelectionChanged(selection: number[]): void;
    GetTotalHeight(): number;
    OnGUI(rect: any): void;
    EndRenaming(): void;
    OnUndoRedoPerformed(): void;
    // properties
    // fields
  }
}
