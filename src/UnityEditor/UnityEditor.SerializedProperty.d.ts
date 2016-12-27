declare namespace UnityEditor {
  class SerializedProperty extends System.Object {
    // constructors
    protected constructor();
    // methods
    Dispose(): void;
    static EqualContents(x: UnityEditor.SerializedProperty, y: UnityEditor.SerializedProperty): boolean;
    Next(enterChildren: boolean): boolean;
    NextVisible(enterChildren: boolean): boolean;
    Reset(): void;
    CountRemaining(): number;
    CountInProperty(): number;
    Copy(): UnityEditor.SerializedProperty;
    DuplicateCommand(): boolean;
    DeleteCommand(): boolean;
    FindPropertyRelative(relativePropertyPath: string): UnityEditor.SerializedProperty;
    GetEndProperty(): UnityEditor.SerializedProperty;
    GetEndProperty(includeInvisible: boolean): UnityEditor.SerializedProperty;
    GetEnumerator(): any;
    GetArrayElementAtIndex(index: number): UnityEditor.SerializedProperty;
    InsertArrayElementAtIndex(index: number): void;
    DeleteArrayElementAtIndex(index: number): void;
    ClearArray(): void;
    MoveArrayElement(srcIndex: number, dstIndex: number): boolean;
    // properties
    readonly serializedObject: UnityEditor.SerializedObject;
    readonly hasMultipleDifferentValues: boolean;
    readonly displayName: string;
    readonly name: string;
    readonly type: string;
    readonly tooltip: string;
    readonly depth: number;
    readonly propertyPath: string;
    readonly editable: boolean;
    readonly isAnimated: boolean;
    isExpanded: boolean;
    readonly hasChildren: boolean;
    readonly hasVisibleChildren: boolean;
    readonly isInstantiatedPrefab: boolean;
    prefabOverride: boolean;
    readonly propertyType: UnityEditor.SerializedPropertyType;
    intValue: number;
    longValue: number;
    boolValue: boolean;
    floatValue: number;
    doubleValue: number;
    stringValue: string;
    colorValue: any;
    animationCurveValue: any;
    objectReferenceValue: UnityEngine.Object;
    objectReferenceInstanceIDValue: number;
    enumValueIndex: number;
    readonly enumNames: string[];
    readonly enumDisplayNames: string[];
    vector2Value: any;
    vector3Value: any;
    vector4Value: any;
    quaternionValue: any;
    rectValue: any;
    boundsValue: any;
    readonly isArray: boolean;
    arraySize: number;
    // fields
  }
}
