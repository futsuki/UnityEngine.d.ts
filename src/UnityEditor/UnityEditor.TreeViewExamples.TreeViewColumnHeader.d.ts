declare namespace UnityEditor.TreeViewExamples {
  class TreeViewColumnHeader extends System.Object {
    // constructors
    constructor();
    // methods
    OnGUI(rect: any): void;
    // properties
    columnWidths: number[];
    minColumnWidth: number;
    dragWidth: number;
    columnRenderer: ((arg1: number, arg2: any) => void);
    // fields
  }
}
