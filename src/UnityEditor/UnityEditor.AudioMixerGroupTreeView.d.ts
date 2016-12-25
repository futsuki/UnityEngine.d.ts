declare namespace UnityEditor {
  class AudioMixerGroupTreeView {
    // constructors
    constructor(mixerWindow: UnityEditor.AudioMixerWindow, treeState: UnityEditor.IMGUI.Controls.TreeViewState);
    // methods
    UseScrollView(useScrollView: boolean): any;
    ReloadTreeData(): any;
    ReloadTree(): any;
    AddChildGroupPopupCallback(obj: any): any;
    AddSiblingGroupPopupCallback(obj: any): any;
    AddAudioMixerGroup(parent: UnityEditor.Audio.AudioMixerGroupController): any;
    DeleteGroups(groups: any, recordUndo: boolean): any;
    DuplicateGroups(groups: any, recordUndo: boolean): any;
    OnTreeViewContextClick(index: number): any;
    OnTreeSelectionChanged(selection: number[]): any;
    InitSelection(revealSelectionAndFrameLastSelected: boolean): any;
    GetTotalHeight(): number;
    OnGUI(rect: any): any;
    OnMixerControllerChanged(controller: UnityEditor.Audio.AudioMixerController): any;
    EndRenaming(): any;
    OnUndoRedoPerformed(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Controller: UnityEditor.Audio.AudioMixerController;
    readonly ScrollToItem: UnityEditor.Audio.AudioMixerGroupController;
    // fields
  }
}
