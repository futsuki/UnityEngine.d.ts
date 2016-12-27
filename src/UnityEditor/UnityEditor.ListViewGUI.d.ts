declare namespace UnityEditor {
  class ListViewGUI extends System.Object {
    // constructors
    constructor();
    // methods
    static ListView(pos: any, state: UnityEditor.ListViewState): UnityEditor.ListViewShared.ListViewElementsEnumerator;
    static ListView(state: UnityEditor.ListViewState, style: any, options: any[]): UnityEditor.ListViewShared.ListViewElementsEnumerator;
    static ListView(state: UnityEditor.ListViewState, colWidths: number[], style: any, options: any[]): UnityEditor.ListViewShared.ListViewElementsEnumerator;
    static ListView(state: UnityEditor.ListViewState, lvOptions: UnityEditor.ListViewOptions, style: any, options: any[]): UnityEditor.ListViewShared.ListViewElementsEnumerator;
    static ListView(state: UnityEditor.ListViewState, lvOptions: UnityEditor.ListViewOptions, dragTitle: string, style: any, options: any[]): UnityEditor.ListViewShared.ListViewElementsEnumerator;
    static ListView(state: UnityEditor.ListViewState, lvOptions: UnityEditor.ListViewOptions, colWidths: number[], dragTitle: string, style: any, options: any[]): UnityEditor.ListViewShared.ListViewElementsEnumerator;
    static DoListView(pos: any, state: UnityEditor.ListViewState, colWidths: number[], dragTitle: string): UnityEditor.ListViewShared.ListViewElementsEnumerator;
    static MultiSelection(prevSelected: number, currSelected: number, initialSelected: any, selectedItems: any): boolean;
    static HasMouseUp(r: any): boolean;
    static HasMouseDown(r: any): boolean;
    static HasMouseDown(r: any, button: number): boolean;
    // properties
    // fields
  }
}
