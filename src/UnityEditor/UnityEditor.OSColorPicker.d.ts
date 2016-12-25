declare namespace UnityEditor {
  class OSColorPicker {
    // constructors
    constructor();
    // methods
    static Show(showAlpha: boolean): any;
    static Close(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly visible: boolean;
    static color: any;
    // fields
  }
}
