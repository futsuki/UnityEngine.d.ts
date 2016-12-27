declare namespace UnityEditor.GenericMenu {
  class MenuItem {
    // constructors
    constructor(_content: any, _separator: boolean, _on: boolean, _func: (() => void));
    constructor(_content: any, _separator: boolean, _on: boolean, _func: ((any) => void), _userData: any);
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
    func: (() => void);
    func2: ((any) => void);
    userData: any;
  }
}
