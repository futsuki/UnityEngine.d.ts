declare namespace UnityEditorInternal {
  class ReorderableList extends System.Object {
    // constructors
    constructor(elements: any, elementType: any);
    constructor(elements: any, elementType: any, draggable: boolean, displayHeader: boolean, displayAddButton: boolean, displayRemoveButton: boolean);
    constructor(serializedObject: UnityEditor.SerializedObject, elements: UnityEditor.SerializedProperty);
    constructor(serializedObject: UnityEditor.SerializedObject, elements: UnityEditor.SerializedProperty, draggable: boolean, displayHeader: boolean, displayAddButton: boolean, displayRemoveButton: boolean);
    // methods
    DoLayoutList(): void;
    DoList(rect: any): void;
    GetHeight(): number;
    GrabKeyboardFocus(): void;
    ReleaseKeyboardFocus(): void;
    HasKeyboardControl(): boolean;
    // properties
    static readonly defaultBehaviours: UnityEditorInternal.ReorderableList.Defaults;
    serializedProperty: UnityEditor.SerializedProperty;
    list: any;
    index: number;
    draggable: boolean;
    readonly count: number;
    // fields
    drawHeaderCallback: ((rect: any) => void);
    drawFooterCallback: ((rect: any) => void);
    drawElementCallback: ((rect: any, index: number, isActive: boolean, isFocused: boolean) => void);
    drawElementBackgroundCallback: ((rect: any, index: number, isActive: boolean, isFocused: boolean) => void);
    elementHeightCallback: ((index: number) => number);
    onReorderCallback: ((list: UnityEditorInternal.ReorderableList) => void);
    onSelectCallback: ((list: UnityEditorInternal.ReorderableList) => void);
    onAddCallback: ((list: UnityEditorInternal.ReorderableList) => void);
    onAddDropdownCallback: ((buttonRect: any, list: UnityEditorInternal.ReorderableList) => void);
    onRemoveCallback: ((list: UnityEditorInternal.ReorderableList) => void);
    onMouseUpCallback: ((list: UnityEditorInternal.ReorderableList) => void);
    onCanRemoveCallback: ((list: UnityEditorInternal.ReorderableList) => boolean);
    onChangedCallback: ((list: UnityEditorInternal.ReorderableList) => void);
    displayAdd: boolean;
    displayRemove: boolean;
    elementHeight: number;
    headerHeight: number;
    footerHeight: number;
    showDefaultBackground: boolean;
  }
}
