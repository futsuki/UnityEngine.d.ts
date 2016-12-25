declare namespace UnityEditor {
  class DragAndDrop {
    // constructors
    constructor();
    // methods
    static PrepareStartDrag(): any;
    static StartDrag(title: string): any;
    static AcceptDrag(): any;
    static GetGenericData(type: string): any;
    static SetGenericData(type: string, data: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static objectReferences: any[];
    static paths: string[];
    static visualMode: UnityEditor.DragAndDropVisualMode;
    static activeControlID: number;
    // fields
  }
}
