declare namespace UnityEditor.LODGroupEditor {
  class LODAction extends System.Object {
    // constructors
    constructor(lods: UnityEditor.LODGroupGUI.LODInfo[], percentage: number, clickedPosition: any, propLODs: UnityEditor.SerializedProperty, callback: (() => void));
    // methods
    InsertLOD(): void;
    DeleteLOD(): void;
    // properties
    // fields
  }
}
