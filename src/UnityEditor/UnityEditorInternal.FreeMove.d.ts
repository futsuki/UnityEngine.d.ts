declare namespace UnityEditorInternal {
  class FreeMove {
    // constructors
    constructor();
    // methods
    static Do(id: number, position: any, rotation: any, size: number, snap: any, capFunc: ((number, any, any, number) => void)): any;
    static Do(id: number, position: any, rotation: any, size: number, snap: any, handleFunction: ((number, any, any, number, any) => void)): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
