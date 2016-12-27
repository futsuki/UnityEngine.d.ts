declare namespace UnityEditor {
  class ColumnView extends System.Object {
    // constructors
    constructor();
    // methods
    SetSelected(column: number, selectionIndex: number): void;
    SetKeyboardFocusColumn(column: number): void;
    OnGUI(elements: UnityEditor.ColumnViewElement[], previewColumnFunction: ((value: any) => void)): void;
    OnGUI(elements: UnityEditor.ColumnViewElement[], previewColumnFunction: ((value: any) => void), selectedSearchItemFunction: ((value: any) => void), selectedRegularItemFunction: ((value: any) => void), getDataForDraggingFunction: ((value: any) => any)): void;
    // properties
    readonly searchText: string;
    readonly isSearching: boolean;
    // fields
    columnWidth: number;
    minimumNumberOfColumns: number;
  }
}
