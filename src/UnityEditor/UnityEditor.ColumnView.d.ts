declare namespace UnityEditor {
  class ColumnView {
    // constructors
    constructor();
    // methods
    SetSelected(column: number, selectionIndex: number): void;
    SetKeyboardFocusColumn(column: number): void;
    OnGUI(elements: any, previewColumnFunction: UnityEditor.ColumnView.ObjectColumnFunction): void;
    OnGUI(elements: any, previewColumnFunction: UnityEditor.ColumnView.ObjectColumnFunction, selectedSearchItemFunction: UnityEditor.ColumnView.ObjectColumnFunction, selectedRegularItemFunction: UnityEditor.ColumnView.ObjectColumnFunction, getDataForDraggingFunction: UnityEditor.ColumnView.ObjectColumnGetDataFunction): void;
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
