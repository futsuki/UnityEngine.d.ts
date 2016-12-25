declare namespace UnityEditor {
  class GameObjectUtility {
    // constructors
    constructor();
    // methods
    static GetStaticEditorFlags(go: any): UnityEditor.StaticEditorFlags;
    static AreStaticEditorFlagsSet(go: any, flags: UnityEditor.StaticEditorFlags): boolean;
    static SetStaticEditorFlags(go: any, flags: UnityEditor.StaticEditorFlags): any;
    static GetNavMeshLayer(go: any): number;
    static GetNavMeshLayerFromName(name: string): number;
    static SetNavMeshLayer(go: any, areaIndex: number): any;
    static GetNavMeshLayerNames(): string[];
    static GetNavMeshArea(go: any): number;
    static GetNavMeshAreaFromName(name: string): number;
    static SetNavMeshArea(go: any, areaIndex: number): any;
    static GetNavMeshAreaNames(): string[];
    static GetUniqueNameForSibling(parent: any, name: string): string;
    static SetParentAndAlign(child: any, parent: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
