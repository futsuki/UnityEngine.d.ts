declare namespace UnityEditorInternal {
  class AnimationWindowHierarchy {
    // constructors
    constructor(state: UnityEditorInternal.AnimationWindowState, owner: UnityEditor.EditorWindow, position: any);
    // methods
    GetContentSize(): any;
    GetTotalRect(): any;
    OnGUI(position: any): any;
    Init(owner: UnityEditor.EditorWindow, rect: any): any;
    IsIDVisible(id: number): boolean;
    EndNameEditing(acceptChanges: boolean): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
