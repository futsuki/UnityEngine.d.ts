declare namespace UnityEditor {
  class GenericMenu extends System.Object {
    // constructors
    constructor();
    // methods
    AddItem(content: any, on: boolean, func: (() => void)): void;
    AddItem(content: any, on: boolean, func: ((userData: any) => void), userData: any): void;
    AddDisabledItem(content: any): void;
    AddSeparator(path: string): void;
    GetItemCount(): number;
    ShowAsContext(): void;
    DropDown(position: any): void;
    // properties
    // fields
  }
}
