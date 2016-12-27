declare namespace UnityEditorInternal {
  class Slider2D {
    // constructors
    constructor();
    // methods
    static Do(id: number, handlePos: any, handleDir: any, slideDir1: any, slideDir2: any, handleSize: number, drawFunc: ((number, any, any, number) => void), snap: number, drawHelper: boolean): any;
    static Do(id: number, handlePos: any, offset: any, handleDir: any, slideDir1: any, slideDir2: any, handleSize: number, drawFunc: ((number, any, any, number) => void), snap: number, drawHelper: boolean): any;
    static Do(id: number, handlePos: any, offset: any, handleDir: any, slideDir1: any, slideDir2: any, handleSize: number, drawFunc: ((number, any, any, number) => void), snap: any, drawHelper: boolean): any;
    static Do(id: number, handlePos: any, handleDir: any, slideDir1: any, slideDir2: any, handleSize: number, capFunction: ((number, any, any, number, any) => void), snap: number, drawHelper: boolean): any;
    static Do(id: number, handlePos: any, offset: any, handleDir: any, slideDir1: any, slideDir2: any, handleSize: number, capFunction: ((number, any, any, number, any) => void), snap: number, drawHelper: boolean): any;
    static Do(id: number, handlePos: any, offset: any, handleDir: any, slideDir1: any, slideDir2: any, handleSize: number, capFunction: ((number, any, any, number, any) => void), snap: any, drawHelper: boolean): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
