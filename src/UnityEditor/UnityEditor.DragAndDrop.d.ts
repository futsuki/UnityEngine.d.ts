declare namespace UnityEditor {
  class DragAndDrop extends System.Object {
    // constructors
    constructor();
    // methods
    static PrepareStartDrag(): void;
    static StartDrag(title: string): void;
    static AcceptDrag(): void;
    static GetGenericData(type: string): any;
    static SetGenericData(type: string, data: any): void;
    // properties
    static objectReferences: UnityEngine.Object[];
    static paths: string[];
    static visualMode: UnityEditor.DragAndDropVisualMode;
    static activeControlID: number;
    // fields
  }
}
