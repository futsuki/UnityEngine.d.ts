declare namespace UnityEditor {
  class DragAndDrop {
    // constructors
    constructor();
    // methods
    static PrepareStartDrag(): void;
    static StartDrag(title: string): void;
    static AcceptDrag(): void;
    static GetGenericData(type: string): any;
    static SetGenericData(type: string, data: any): void;
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
