declare namespace UnityEditor {
  class Selection extends System.Object {
    // constructors
    constructor();
    // methods
    static Contains(instanceID: number): boolean;
    static Contains(obj: UnityEngine.Object): boolean;
    static GetTransforms(mode: UnityEditor.SelectionMode): any[];
    static GetFiltered(type: any, mode: UnityEditor.SelectionMode): UnityEngine.Object[];
    // properties
    static readonly transforms: any[];
    static activeTransform: any;
    static readonly gameObjects: any[];
    static activeGameObject: any;
    static activeObject: UnityEngine.Object;
    static activeInstanceID: number;
    static objects: UnityEngine.Object[];
    static instanceIDs: number[];
    static readonly assetGUIDs: string[];
    // fields
    static selectionChanged: (() => void);
  }
}
