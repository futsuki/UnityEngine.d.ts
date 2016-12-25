declare namespace UnityEditor {
  class TerrainInspectorUtil {
    // constructors
    constructor();
    // methods
    static GetTreePlacementSize(terrainData: any, prototypeIndex: number, spacing: number, treeCount: number): number;
    static CheckTreeDistance(terrainData: any, position: any, prototypeIndex: number, distanceBias: number): boolean;
    static GetPrototypeExtent(terrainData: any, prototypeIndex: number): any;
    static GetPrototypeCount(terrainData: any): number;
    static PrototypeIsRenderable(terrainData: any, prototypeIndex: number): boolean;
    static RefreshPhysicsInEditMode(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
