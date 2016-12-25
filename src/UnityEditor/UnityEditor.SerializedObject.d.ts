declare namespace UnityEditor {
  class SerializedObject {
    // constructors
    constructor(obj: any);
    constructor(objs: any[]);
    // methods
    Update(): any;
    SetIsDifferentCacheDirty(): any;
    UpdateIfDirtyOrScript(): any;
    Dispose(): any;
    GetIterator(): UnityEditor.SerializedProperty;
    FindProperty(propertyPath: string): UnityEditor.SerializedProperty;
    ApplyModifiedProperties(): boolean;
    ApplyModifiedPropertiesWithoutUndo(): boolean;
    CopyFromSerializedProperty(prop: UnityEditor.SerializedProperty): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly targetObject: any;
    readonly targetObjects: any[];
    readonly isEditingMultipleObjects: boolean;
    maxArraySizeForMultiEditing: number;
    // fields
  }
}
