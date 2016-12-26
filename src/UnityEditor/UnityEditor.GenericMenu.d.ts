declare namespace UnityEditor {
  class GenericMenu {
    // constructors
    constructor();
    // methods
    AddItem(content: any, on: boolean, func: UnityEditor.GenericMenu.MenuFunction): void;
    AddItem(content: any, on: boolean, func: UnityEditor.GenericMenu.MenuFunction2, userData: any): void;
    AddDisabledItem(content: any): void;
    AddSeparator(path: string): void;
    GetItemCount(): number;
    ShowAsContext(): void;
    DropDown(position: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
