declare namespace UnityEditor {
  class TreePainter {
    // constructors
    constructor();
    // methods
    static PlaceTrees(terrain: any, xBase: number, yBase: number): void;
    static RemoveTrees(terrain: any, xBase: number, yBase: number, clearSelectedOnly: boolean): void;
    static MassPlaceTrees(terrainData: any, numberOfTrees: number, randomTreeColor: boolean, keepExistingTrees: boolean): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static brushSize: number;
    static spacing: number;
    static lockWidthToHeight: boolean;
    static randomRotation: boolean;
    static allowHeightVar: boolean;
    static allowWidthVar: boolean;
    static treeColorAdjustment: number;
    static treeHeight: number;
    static treeHeightVariation: number;
    static treeWidth: number;
    static treeWidthVariation: number;
    static selectedTree: number;
  }
}
