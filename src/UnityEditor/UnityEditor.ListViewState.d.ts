declare namespace UnityEditor {
  class ListViewState extends System.Object {
    // constructors
    constructor();
    constructor(totalRows: number);
    constructor(totalRows: number, rowHeight: number);
    // methods
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
