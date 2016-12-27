declare namespace UnityEditorInternal.ReorderableList {
  class Defaults extends System.Object {
    // constructors
    constructor();
    // methods
    DrawFooter(rect: any, list: UnityEditorInternal.ReorderableList): void;
    DoAddButton(list: UnityEditorInternal.ReorderableList): void;
    DoRemoveButton(list: UnityEditorInternal.ReorderableList): void;
    DrawHeaderBackground(headerRect: any): void;
    DrawHeader(headerRect: any, serializedObject: UnityEditor.SerializedObject, element: UnityEditor.SerializedProperty, elementList: any): void;
    DrawElementBackground(rect: any, index: number, selected: boolean, focused: boolean, draggable: boolean): void;
    DrawElementDraggingHandle(rect: any, index: number, selected: boolean, focused: boolean, draggable: boolean): void;
    DrawElement(rect: any, element: UnityEditor.SerializedProperty, listItem: any, selected: boolean, focused: boolean, draggable: boolean): void;
    DrawNoneElement(rect: any, draggable: boolean): void;
    // properties
    // fields
    iconToolbarPlus: any;
    iconToolbarPlusMore: any;
    iconToolbarMinus: any;
    draggingHandle: any;
    headerBackground: any;
    footerBackground: any;
    boxBackground: any;
    preButton: any;
    elementBackground: any;
    static padding: number;
    static dragHandleWidth: number;
  }
}
