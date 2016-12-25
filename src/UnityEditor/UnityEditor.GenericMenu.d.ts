declare namespace UnityEditor {
  class GenericMenu {
    // constructors
    constructor();
    // methods
    AddItem(content: any, on: boolean, func: UnityEditor.GenericMenu.MenuFunction): any;
    AddItem(content: any, on: boolean, func: UnityEditor.GenericMenu.MenuFunction2, userData: any): any;
    AddDisabledItem(content: any): any;
    AddSeparator(path: string): any;
    GetItemCount(): number;
    ShowAsContext(): any;
    DropDown(position: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
