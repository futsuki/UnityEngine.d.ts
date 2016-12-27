declare namespace UnityEditor {
  class AudioMixersTreeView {
    // constructors
    constructor(mixerWindow: UnityEditor.AudioMixerWindow, treeState: UnityEditor.IMGUI.Controls.TreeViewState, getAllControllersCallback: (() => any));
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
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
