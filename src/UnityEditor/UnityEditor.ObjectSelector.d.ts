declare namespace UnityEditor {
  class ObjectSelector extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    SetupPreview(): void;
    Show(obj: UnityEngine.Object, requiredType: any, property: UnityEditor.SerializedProperty, allowSceneObjects: boolean): void;
    Show(): void;
    Show(immediateDisplay: boolean): void;
    static GetCurrentObject(): UnityEngine.Object;
    static GetInitialObject(): UnityEngine.Object;
    // properties
    readonly allowedInstanceIDs: number[];
    static readonly get: UnityEditor.ObjectSelector;
    static readonly isVisible: boolean;
    // fields
  }
}
