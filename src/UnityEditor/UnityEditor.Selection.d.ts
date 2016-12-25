declare namespace UnityEditor {
  class Selection {
    // constructors
    constructor();
    // methods
    static Contains(instanceID: number): boolean;
    static Contains(obj: any): boolean;
    static GetTransforms(mode: UnityEditor.SelectionMode): any[];
    static GetFiltered(type: any, mode: UnityEditor.SelectionMode): any[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly transforms: any[];
    static activeTransform: any;
    static readonly gameObjects: any[];
    static activeGameObject: any;
    static activeObject: any;
    static activeInstanceID: number;
    static objects: any[];
    static instanceIDs: number[];
    static readonly assetGUIDs: string[];
    // fields
    static selectionChanged: any;
  }
}
