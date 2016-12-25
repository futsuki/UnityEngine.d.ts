declare namespace UnityEditor {
  class ColumnView {
    // constructors
    constructor();
    // methods
    SetSelected(column: number, selectionIndex: number): any;
    SetKeyboardFocusColumn(column: number): any;
    OnGUI(elements: any, previewColumnFunction: UnityEditor.ColumnView.ObjectColumnFunction): any;
    OnGUI(elements: any, previewColumnFunction: UnityEditor.ColumnView.ObjectColumnFunction, selectedSearchItemFunction: UnityEditor.ColumnView.ObjectColumnFunction, selectedRegularItemFunction: UnityEditor.ColumnView.ObjectColumnFunction, getDataForDraggingFunction: UnityEditor.ColumnView.ObjectColumnGetDataFunction): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly searchText: string;
    readonly isSearching: boolean;
    // fields
    columnWidth: number;
    minimumNumberOfColumns: number;
  }
}
