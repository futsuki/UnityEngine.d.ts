declare namespace UnityEditor {
  class ListViewGUILayout extends System.Object {
    // constructors
    constructor();
    // methods
    static ListView(state: UnityEditor.ListViewState, style: any, options: any[]): UnityEditor.ListViewShared.ListViewElementsEnumerator;
    static ListView(state: UnityEditor.ListViewState, dragTitle: string, style: any, options: any[]): UnityEditor.ListViewShared.ListViewElementsEnumerator;
    static ListView(state: UnityEditor.ListViewState, lvOptions: UnityEditor.ListViewOptions, style: any, options: any[]): UnityEditor.ListViewShared.ListViewElementsEnumerator;
    static ListView(state: UnityEditor.ListViewState, lvOptions: UnityEditor.ListViewOptions, dragTitle: string, style: any, options: any[]): UnityEditor.ListViewShared.ListViewElementsEnumerator;
    static MultiSelection(prevSelected: number, currSelected: number, initialSelected: any, selectedItems: any): boolean;
    static HasMouseUp(r: any): boolean;
    static HasMouseDown(r: any): boolean;
    static HasMouseDown(r: any, button: number): boolean;
    // properties
    // fields
  }
}
