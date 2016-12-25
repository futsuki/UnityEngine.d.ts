declare namespace UnityEditorInternal {
  class FreeMove {
    // constructors
    constructor();
    // methods
    static Do(id: number, position: any, rotation: any, size: number, snap: any, capFunc: UnityEditor.Handles.DrawCapFunction): any;
    static Do(id: number, position: any, rotation: any, size: number, snap: any, handleFunction: UnityEditor.Handles.CapFunction): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
