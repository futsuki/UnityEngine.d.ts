declare namespace UnityEditorInternal {
  class SliderScale extends System.Object {
    // constructors
    constructor();
    // methods
    static DoAxis(id: number, scale: number, position: any, direction: any, rotation: any, size: number, snap: number): number;
    static DoCenter(id: number, value: number, position: any, rotation: any, size: number, capFunc: ((controlID: number, position: any, rotation: any, size: number) => void), snap: number): number;
    static DoCenter(id: number, value: number, position: any, rotation: any, size: number, capFunction: ((controlID: number, position: any, rotation: any, size: number, eventType: any) => void), snap: number): number;
    // properties
    // fields
  }
}
