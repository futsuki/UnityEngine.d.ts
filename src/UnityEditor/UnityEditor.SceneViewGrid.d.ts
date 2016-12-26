declare namespace UnityEditor {
  class SceneViewGrid {
    // constructors
    constructor();
    // methods
    Register(source: UnityEditor.SceneView): void;
    PrepareGridRender(camera: any, pivot: any, rotation: any, size: number, orthoMode: boolean, gridVisible: boolean): UnityEditor.DrawGridParameters;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
