declare namespace UnityEditorInternal {
  class FreeMove extends System.Object {
    // constructors
    constructor();
    // methods
    static Do(id: number, position: any, rotation: any, size: number, snap: any, capFunc: ((controlID: number, position: any, rotation: any, size: number) => void)): any;
    static Do(id: number, position: any, rotation: any, size: number, snap: any, handleFunction: ((controlID: number, position: any, rotation: any, size: number, eventType: any) => void)): any;
    // properties
    // fields
  }
}
