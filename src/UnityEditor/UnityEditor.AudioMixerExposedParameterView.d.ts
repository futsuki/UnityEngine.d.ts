declare namespace UnityEditor {
  class AudioMixerExposedParameterView {
    // constructors
    constructor(state: UnityEditorInternal.ReorderableListWithRenameAndScrollView.State);
    // methods
    OnMixerControllerChanged(controller: UnityEditor.Audio.AudioMixerController): any;
    RecreateListControl(): any;
    OnGUI(rect: any): any;
    OnContextClick(itemIndex: number): any;
    CalcSize(): any;
    NameChanged(index: number, newName: string): any;
    EndDragChild(list: UnityEditorInternal.ReorderableList): any;
    OnEvent(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
