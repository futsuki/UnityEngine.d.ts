declare namespace UnityEditor {
  class ColumnView {
    // constructors
    constructor();
    // methods
    SetSelected(column: number, selectionIndex: number): void;
    SetKeyboardFocusColumn(column: number): void;
    OnGUI(elements: any, previewColumnFunction: ((any) => void)): void;
    OnGUI(elements: any, previewColumnFunction: ((any) => void), selectedSearchItemFunction: ((any) => void), selectedRegularItemFunction: ((any) => void), getDataForDraggingFunction: ((any) => any)): void;
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
