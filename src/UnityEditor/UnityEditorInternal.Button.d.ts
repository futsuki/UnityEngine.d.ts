declare namespace UnityEditorInternal {
  class Button {
    // constructors
    constructor();
    // methods
    static Do(id: number, position: any, direction: any, size: number, pickSize: number, capFunc: UnityEditor.Handles.DrawCapFunction): boolean;
    static Do(id: number, position: any, direction: any, size: number, pickSize: number, capFunction: UnityEditor.Handles.CapFunction): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
