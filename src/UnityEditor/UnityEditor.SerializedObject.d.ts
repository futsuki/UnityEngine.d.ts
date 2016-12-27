declare namespace UnityEditor {
  class SerializedObject extends System.Object {
    // constructors
    constructor(obj: UnityEngine.Object);
    constructor(objs: UnityEngine.Object[]);
    // methods
    Update(): void;
    SetIsDifferentCacheDirty(): void;
    UpdateIfDirtyOrScript(): void;
    Dispose(): void;
    GetIterator(): UnityEditor.SerializedProperty;
    FindProperty(propertyPath: string): UnityEditor.SerializedProperty;
    ApplyModifiedProperties(): boolean;
    ApplyModifiedPropertiesWithoutUndo(): boolean;
    CopyFromSerializedProperty(prop: UnityEditor.SerializedProperty): void;
    // properties
    readonly targetObject: UnityEngine.Object;
    readonly targetObjects: UnityEngine.Object[];
    readonly isEditingMultipleObjects: boolean;
    maxArraySizeForMultiEditing: number;
    // fields
  }
}
