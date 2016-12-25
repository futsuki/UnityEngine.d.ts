declare namespace UnityEditorInternal {
  class ReorderableList {
    // constructors
    constructor(elements: any, elementType: any);
    constructor(elements: any, elementType: any, draggable: boolean, displayHeader: boolean, displayAddButton: boolean, displayRemoveButton: boolean);
    constructor(serializedObject: UnityEditor.SerializedObject, elements: UnityEditor.SerializedProperty);
    constructor(serializedObject: UnityEditor.SerializedObject, elements: UnityEditor.SerializedProperty, draggable: boolean, displayHeader: boolean, displayAddButton: boolean, displayRemoveButton: boolean);
    // methods
    DoLayoutList(): any;
    DoList(rect: any): any;
    GetHeight(): number;
    GrabKeyboardFocus(): any;
    ReleaseKeyboardFocus(): any;
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
    drawHeaderCallback: UnityEditorInternal.ReorderableList.HeaderCallbackDelegate;
    drawFooterCallback: UnityEditorInternal.ReorderableList.FooterCallbackDelegate;
    drawElementCallback: UnityEditorInternal.ReorderableList.ElementCallbackDelegate;
    drawElementBackgroundCallback: UnityEditorInternal.ReorderableList.ElementCallbackDelegate;
    elementHeightCallback: UnityEditorInternal.ReorderableList.ElementHeightCallbackDelegate;
    onReorderCallback: UnityEditorInternal.ReorderableList.ReorderCallbackDelegate;
    onSelectCallback: UnityEditorInternal.ReorderableList.SelectCallbackDelegate;
    onAddCallback: UnityEditorInternal.ReorderableList.AddCallbackDelegate;
    onAddDropdownCallback: UnityEditorInternal.ReorderableList.AddDropdownCallbackDelegate;
    onRemoveCallback: UnityEditorInternal.ReorderableList.RemoveCallbackDelegate;
    onMouseUpCallback: UnityEditorInternal.ReorderableList.SelectCallbackDelegate;
    onCanRemoveCallback: UnityEditorInternal.ReorderableList.CanRemoveCallbackDelegate;
    onChangedCallback: UnityEditorInternal.ReorderableList.ChangedCallbackDelegate;
    displayAdd: boolean;
    displayRemove: boolean;
    elementHeight: number;
    headerHeight: number;
    footerHeight: number;
    showDefaultBackground: boolean;
  }
}
