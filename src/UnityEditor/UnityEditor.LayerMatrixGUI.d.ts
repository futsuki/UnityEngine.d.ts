declare namespace UnityEditor {
  class LayerMatrixGUI {
    // constructors
    constructor();
    // methods
    static DoGUI(title: string, show: any, scrollPos: any, getValue: ((number, number) => boolean), setValue: ((number, number, boolean) => void)): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
