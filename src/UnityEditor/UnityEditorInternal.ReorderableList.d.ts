declare namespace UnityEditorInternal {
  class ReorderableList {
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
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly defaultBehaviours: UnityEditorInternal.ReorderableList.Defaults;
    serializedProperty: UnityEditor.SerializedProperty;
    list: any;
    index: number;
    draggable: boolean;
    readonly count: number;
    // fields
    drawHeaderCallback: ((any) => void);
    drawFooterCallback: ((any) => void);
    drawElementCallback: ((any, number, boolean, boolean) => void);
    drawElementBackgroundCallback: ((any, number, boolean, boolean) => void);
    elementHeightCallback: ((number) => number);
    onReorderCallback: ((UnityEditorInternal.ReorderableList) => void);
    onSelectCallback: ((UnityEditorInternal.ReorderableList) => void);
    onAddCallback: ((UnityEditorInternal.ReorderableList) => void);
    onAddDropdownCallback: ((any, UnityEditorInternal.ReorderableList) => void);
    onRemoveCallback: ((UnityEditorInternal.ReorderableList) => void);
    onMouseUpCallback: ((UnityEditorInternal.ReorderableList) => void);
    onCanRemoveCallback: ((UnityEditorInternal.ReorderableList) => boolean);
    onChangedCallback: ((UnityEditorInternal.ReorderableList) => void);
    displayAdd: boolean;
    displayRemove: boolean;
    elementHeight: number;
    headerHeight: number;
    footerHeight: number;
    showDefaultBackground: boolean;
  }
}
