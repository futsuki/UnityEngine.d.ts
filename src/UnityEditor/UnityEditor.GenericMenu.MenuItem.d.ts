declare namespace UnityEditor.GenericMenu {
  class MenuItem {
    // constructors
    constructor(_content: any, _separator: boolean, _on: boolean, _func: UnityEditor.GenericMenu.MenuFunction);
    constructor(_content: any, _separator: boolean, _on: boolean, _func: UnityEditor.GenericMenu.MenuFunction2, _userData: any);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    content: any;
    separator: boolean;
    on: boolean;
    func: UnityEditor.GenericMenu.MenuFunction;
    func2: UnityEditor.GenericMenu.MenuFunction2;
    userData: any;
  }
}
