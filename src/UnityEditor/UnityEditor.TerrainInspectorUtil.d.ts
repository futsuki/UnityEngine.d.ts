declare namespace UnityEditor {
  class TerrainInspectorUtil extends System.Object {
    // constructors
    constructor();
    // methods
    static GetTreePlacementSize(terrainData: any, prototypeIndex: number, spacing: number, treeCount: number): number;
    static CheckTreeDistance(terrainData: any, position: any, prototypeIndex: number, distanceBias: number): boolean;
    static GetPrototypeExtent(terrainData: any, prototypeIndex: number): any;
    static GetPrototypeCount(terrainData: any): number;
    static PrototypeIsRenderable(terrainData: any, prototypeIndex: number): boolean;
    static RefreshPhysicsInEditMode(): void;
    // properties
    // fields
  }
}
