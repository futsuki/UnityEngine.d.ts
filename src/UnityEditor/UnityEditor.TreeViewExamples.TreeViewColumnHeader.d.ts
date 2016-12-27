declare namespace UnityEditor.TreeViewExamples {
  class TreeViewColumnHeader {
    // constructors
    constructor();
    // methods
    OnGUI(rect: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    columnWidths: number[];
    minColumnWidth: number;
    dragWidth: number;
    columnRenderer: ((number, any) => void);
    // fields
  }
}
