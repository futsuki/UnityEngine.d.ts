declare namespace UnityEditor.LODGroupEditor {
  class LODAction {
    // constructors
    constructor(lods: any, percentage: number, clickedPosition: any, propLODs: UnityEditor.SerializedProperty, callback: UnityEditor.LODGroupEditor.LODAction.Callback);
    // methods
    InsertLOD(): any;
    DeleteLOD(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
