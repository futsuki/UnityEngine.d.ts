declare namespace UnityEditor {
  class AudioMixerSnapshotListView extends System.Object {
    // constructors
    constructor(state: UnityEditorInternal.ReorderableListWithRenameAndScrollView.State);
    // methods
    OnMixerControllerChanged(controller: UnityEditor.Audio.AudioMixerController): void;
    LoadFromBackend(): void;
    OnEvent(): void;
    CustomDrawElement(r: any, index: number, isActive: boolean, isFocused: boolean): void;
    GetTotalHeight(): number;
    OnGUI(rect: any): void;
    SelectionChanged(index: number): void;
    NameChanged(index: number, newName: string): void;
    EndDragChild(list: UnityEditorInternal.ReorderableList): void;
    OnUndoRedoPerformed(): void;
    // properties
    // fields
  }
}
