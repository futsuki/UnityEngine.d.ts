declare namespace UnityEditor.ListViewShared {
  class InternalLayoutedListViewState {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    group: UnityEditor.ListViewGUILayout.GUILayoutedListViewGroup;
    id: number;
    invisibleRows: number;
    endRow: number;
    rectHeight: number;
    state: UnityEditor.ListViewState;
    beganHorizontal: boolean;
    rect: any;
    wantsReordering: boolean;
    wantsExternalFiles: boolean;
    wantsToStartCustomDrag: boolean;
    wantsToAcceptCustomDrag: boolean;
    dragItem: number;
  }
}
