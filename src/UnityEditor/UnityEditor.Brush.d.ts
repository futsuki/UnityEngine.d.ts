declare namespace UnityEditor {
  class Brush {
    // constructors
    constructor();
    // methods
    Load(brushTex: any, size: number): boolean;
    GetStrengthInt(ix: number, iy: number): number;
    Dispose(): void;
    GetPreviewProjector(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
