declare namespace UnityEditor {
  class GenericMenu {
    // constructors
    constructor();
    // methods
    AddItem(content: any, on: boolean, func: (() => void)): void;
    AddItem(content: any, on: boolean, func: ((any) => void), userData: any): void;
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
