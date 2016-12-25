declare namespace UnityEditorInternal {
  class SliderScale {
    // constructors
    constructor();
    // methods
    static DoAxis(id: number, scale: number, position: any, direction: any, rotation: any, size: number, snap: number): number;
    static DoCenter(id: number, value: number, position: any, rotation: any, size: number, capFunc: UnityEditor.Handles.DrawCapFunction, snap: number): number;
    static DoCenter(id: number, value: number, position: any, rotation: any, size: number, capFunction: UnityEditor.Handles.CapFunction, snap: number): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
