declare namespace UnityEditor {
  class LODVisualizationInformation {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    triangleCount: number;
    vertexCount: number;
    rendererCount: number;
    submeshCount: number;
    activeLODLevel: number;
    activeLODFade: number;
    activeDistance: number;
    activeRelativeScreenSize: number;
    activePixelSize: number;
    worldSpaceSize: number;
  }
}
