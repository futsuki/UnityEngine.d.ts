declare namespace UnityEditorInternal {
  class Button extends System.Object {
    // constructors
    constructor();
    // methods
    static Do(id: number, position: any, direction: any, size: number, pickSize: number, capFunc: ((controlID: number, position: any, rotation: any, size: number) => void)): boolean;
    static Do(id: number, position: any, direction: any, size: number, pickSize: number, capFunction: ((controlID: number, position: any, rotation: any, size: number, eventType: any) => void)): boolean;
    // properties
    // fields
  }
}
