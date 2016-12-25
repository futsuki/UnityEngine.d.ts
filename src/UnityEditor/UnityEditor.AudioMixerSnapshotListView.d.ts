declare namespace UnityEditor {
  class AudioMixerSnapshotListView {
    // constructors
    constructor(state: UnityEditorInternal.ReorderableListWithRenameAndScrollView.State);
    // methods
    OnMixerControllerChanged(controller: UnityEditor.Audio.AudioMixerController): any;
    LoadFromBackend(): any;
    OnEvent(): any;
    CustomDrawElement(r: any, index: number, isActive: boolean, isFocused: boolean): any;
    GetTotalHeight(): number;
    OnGUI(rect: any): any;
    SelectionChanged(index: number): any;
    NameChanged(index: number, newName: string): any;
    EndDragChild(list: UnityEditorInternal.ReorderableList): any;
    OnUndoRedoPerformed(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
