declare namespace UnityEditor {
  class AudioMixerExposedParameterView extends System.Object {
    // constructors
    constructor(state: UnityEditorInternal.ReorderableListWithRenameAndScrollView.State);
    // methods
    OnMixerControllerChanged(controller: UnityEditor.Audio.AudioMixerController): void;
    RecreateListControl(): void;
    OnGUI(rect: any): void;
    OnContextClick(itemIndex: number): void;
    CalcSize(): any;
    NameChanged(index: number, newName: string): void;
    EndDragChild(list: UnityEditorInternal.ReorderableList): void;
    OnEvent(): void;
    // properties
    // fields
  }
}
