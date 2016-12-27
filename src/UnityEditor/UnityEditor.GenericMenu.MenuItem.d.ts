declare namespace UnityEditor.GenericMenu {
  class MenuItem extends System.Object {
    // constructors
    constructor(_content: any, _separator: boolean, _on: boolean, _func: (() => void));
    constructor(_content: any, _separator: boolean, _on: boolean, _func: ((userData: any) => void), _userData: any);
    // methods
    // properties
    // fields
    content: any;
    separator: boolean;
    on: boolean;
    func: (() => void);
    func2: ((userData: any) => void);
    userData: any;
  }
}
