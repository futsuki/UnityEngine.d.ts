declare namespace UnityEditor {
  class ObjectNames extends System.Object {
    // constructors
    constructor();
    // methods
    static NicifyVariableName(name: string): string;
    static GetInspectorTitle(obj: UnityEngine.Object): string;
    static GetClassName(obj: UnityEngine.Object): string;
    static GetDragAndDropTitle(obj: UnityEngine.Object): string;
    static SetNameSmart(obj: UnityEngine.Object, name: string): void;
    static MangleVariableName(name: string): string;
    static GetPropertyEditorTitle(obj: UnityEngine.Object): string;
    static GetUniqueName(existingNames: string[], name: string): string;
    // properties
    // fields
  }
}
