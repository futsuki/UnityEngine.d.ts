declare namespace UnityEditorInternal {
  class Button {
    // constructors
    constructor();
    // methods
    static Do(id: number, position: any, direction: any, size: number, pickSize: number, capFunc: ((number, any, any, number) => void)): boolean;
    static Do(id: number, position: any, direction: any, size: number, pickSize: number, capFunction: ((number, any, any, number, any) => void)): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
