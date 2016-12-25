declare namespace UnityEditorInternal.ReorderableList {
  class Defaults {
    // constructors
    constructor();
    // methods
    DrawFooter(rect: any, list: UnityEditorInternal.ReorderableList): any;
    DoAddButton(list: UnityEditorInternal.ReorderableList): any;
    DoRemoveButton(list: UnityEditorInternal.ReorderableList): any;
    DrawHeaderBackground(headerRect: any): any;
    DrawHeader(headerRect: any, serializedObject: UnityEditor.SerializedObject, element: UnityEditor.SerializedProperty, elementList: any): any;
    DrawElementBackground(rect: any, index: number, selected: boolean, focused: boolean, draggable: boolean): any;
    DrawElementDraggingHandle(rect: any, index: number, selected: boolean, focused: boolean, draggable: boolean): any;
    DrawElement(rect: any, element: UnityEditor.SerializedProperty, listItem: any, selected: boolean, focused: boolean, draggable: boolean): any;
    DrawNoneElement(rect: any, draggable: boolean): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
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
