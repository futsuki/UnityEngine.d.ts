declare namespace UnityEditor {
  class AudioMixerGroupTreeView {
    // constructors
    constructor(mixerWindow: UnityEditor.AudioMixerWindow, treeState: UnityEditor.IMGUI.Controls.TreeViewState);
    // methods
    UseScrollView(useScrollView: boolean): void;
    ReloadTreeData(): void;
    ReloadTree(): void;
    AddChildGroupPopupCallback(obj: any): void;
    AddSiblingGroupPopupCallback(obj: any): void;
    AddAudioMixerGroup(parent: UnityEditor.Audio.AudioMixerGroupController): void;
    DeleteGroups(groups: any, recordUndo: boolean): void;
    DuplicateGroups(groups: any, recordUndo: boolean): void;
    OnTreeViewContextClick(index: number): void;
    OnTreeSelectionChanged(selection: number[]): void;
    InitSelection(revealSelectionAndFrameLastSelected: boolean): void;
    GetTotalHeight(): number;
    OnGUI(rect: any): void;
    OnMixerControllerChanged(controller: UnityEditor.Audio.AudioMixerController): void;
    EndRenaming(): void;
    OnUndoRedoPerformed(): void;
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
