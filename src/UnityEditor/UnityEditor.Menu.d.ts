declare namespace UnityEditor {
  class Menu {
    // constructors
    constructor();
    // methods
    static SetChecked(menuPath: string, isChecked: boolean): void;
    static GetChecked(menuPath: string): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
