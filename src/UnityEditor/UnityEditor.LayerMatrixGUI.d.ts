declare namespace UnityEditor {
  class LayerMatrixGUI extends System.Object {
    // constructors
    constructor();
    // methods
    static DoGUI(title: string, show: any, scrollPos: any, getValue: ((layerA: number, layerB: number) => boolean), setValue: ((layerA: number, layerB: number, val: boolean) => void)): void;
    // properties
    // fields
  }
}
