declare namespace UnityEditor {
  class ListViewState {
    // constructors
    constructor();
    constructor(totalRows: number);
    constructor(totalRows: number, rowHeight: number);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    row: number;
    column: number;
    scrollPos: any;
    totalRows: number;
    rowHeight: number;
    ID: number;
    selectionChanged: boolean;
    draggedFrom: number;
    draggedTo: number;
    drawDropHere: boolean;
    dropHereRect: any;
    fileNames: string[];
    customDraggedFromID: number;
  }
}
