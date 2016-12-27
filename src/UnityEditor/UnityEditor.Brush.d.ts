declare namespace UnityEditor {
  class Brush extends System.Object {
    // constructors
    constructor();
    // methods
    Load(brushTex: any, size: number): boolean;
    GetStrengthInt(ix: number, iy: number): number;
    Dispose(): void;
    GetPreviewProjector(): any;
    // properties
    // fields
  }
}
