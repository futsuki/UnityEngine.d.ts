declare namespace UnityEditorInternal {
  class AnimationWindowHierarchy extends System.Object {
    // constructors
    constructor(state: UnityEditorInternal.AnimationWindowState, owner: UnityEditor.EditorWindow, position: any);
    // methods
    GetContentSize(): any;
    GetTotalRect(): any;
    OnGUI(position: any): void;
    Init(owner: UnityEditor.EditorWindow, rect: any): void;
    IsIDVisible(id: number): boolean;
    EndNameEditing(acceptChanges: boolean): void;
    // properties
    // fields
  }
}
