declare namespace UnityEditor {
  class AudioMixerGroupViewList extends System.Object {
    // constructors
    constructor(state: UnityEditorInternal.ReorderableListWithRenameAndScrollView.State);
    // methods
    OnMixerControllerChanged(controller: UnityEditor.Audio.AudioMixerController): void;
    OnUndoRedoPerformed(): void;
    OnEvent(): void;
    RecreateListControl(): void;
    GetTotalHeight(): number;
    OnGUI(rect: any): void;
    CustomDrawElement(r: any, index: number, isActive: boolean, isFocused: boolean): void;
    NameChanged(index: number, newName: string): void;
    SelectionChanged(selectedIndex: number): void;
    EndDragChild(list: UnityEditorInternal.ReorderableList): void;
    // properties
    // fields
  }
}
