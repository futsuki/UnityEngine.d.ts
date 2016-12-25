declare namespace UnityEditor {
  class AudioMixerGroupViewList {
    // constructors
    constructor(state: UnityEditorInternal.ReorderableListWithRenameAndScrollView.State);
    // methods
    OnMixerControllerChanged(controller: UnityEditor.Audio.AudioMixerController): any;
    OnUndoRedoPerformed(): any;
    OnEvent(): any;
    RecreateListControl(): any;
    GetTotalHeight(): number;
    OnGUI(rect: any): any;
    CustomDrawElement(r: any, index: number, isActive: boolean, isFocused: boolean): any;
    NameChanged(index: number, newName: string): any;
    SelectionChanged(selectedIndex: number): any;
    EndDragChild(list: UnityEditorInternal.ReorderableList): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
