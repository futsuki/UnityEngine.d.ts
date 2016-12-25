declare namespace UnityEditorInternal {
  class ReorderableListWithRenameAndScrollView {
    // constructors
    constructor(list: UnityEditorInternal.ReorderableList, state: UnityEditorInternal.ReorderableListWithRenameAndScrollView.State);
    // methods
    OnEvent(): any;
    OnGUI(rect: any): any;
    IsRenamingIndex(index: number): boolean;
    DrawElement(r: any, index: number, isActive: boolean, isFocused: boolean): any;
    DrawElementText(r: any, index: number, isActive: boolean, isSelected: boolean, isFocused: boolean): any;
    DoRenameOverlay(): any;
    BeginRename(index: number, delay: number): any;
    EndRename(acceptChanges: boolean): any;
    ReorderCallback(list: UnityEditorInternal.ReorderableList): any;
    MouseUpCallback(list: UnityEditorInternal.ReorderableList): any;
    SelectCallback(list: UnityEditorInternal.ReorderableList): any;
    FrameItem(index: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly list: UnityEditorInternal.ReorderableList;
    readonly elementStyle: any;
    readonly elementStyleRightAligned: any;
    // fields
    listElementStyle: any;
    renameOverlayStyle: any;
    onGetNameAtIndex: any;
    onNameChangedAtIndex: any;
    onSelectionChanged: any;
    onDeleteItemAtIndex: any;
    onCustomDrawElement: UnityEditorInternal.ReorderableList.ElementCallbackDelegate;
  }
}
