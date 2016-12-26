declare namespace UnityEditorInternal {
  class ReorderableListWithRenameAndScrollView {
    // constructors
    constructor(list: UnityEditorInternal.ReorderableList, state: UnityEditorInternal.ReorderableListWithRenameAndScrollView.State);
    // methods
    OnEvent(): void;
    OnGUI(rect: any): void;
    IsRenamingIndex(index: number): boolean;
    DrawElement(r: any, index: number, isActive: boolean, isFocused: boolean): void;
    DrawElementText(r: any, index: number, isActive: boolean, isSelected: boolean, isFocused: boolean): void;
    DoRenameOverlay(): void;
    BeginRename(index: number, delay: number): void;
    EndRename(acceptChanges: boolean): void;
    ReorderCallback(list: UnityEditorInternal.ReorderableList): void;
    MouseUpCallback(list: UnityEditorInternal.ReorderableList): void;
    SelectCallback(list: UnityEditorInternal.ReorderableList): void;
    FrameItem(index: number): void;
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
