declare namespace UnityEditor.ControlPointRenderer {
  class RenderChunk {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    mesh: any;
    vertices: any;
    colors: any;
    uvs: any;
    indices: any;
    isDirty: boolean;
  }
}
