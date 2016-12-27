declare namespace UnityEditor {
  class GameObjectUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static GetStaticEditorFlags(go: any): UnityEditor.StaticEditorFlags;
    static AreStaticEditorFlagsSet(go: any, flags: UnityEditor.StaticEditorFlags): boolean;
    static SetStaticEditorFlags(go: any, flags: UnityEditor.StaticEditorFlags): void;
    static GetNavMeshLayer(go: any): number;
    static GetNavMeshLayerFromName(name: string): number;
    static SetNavMeshLayer(go: any, areaIndex: number): void;
    static GetNavMeshLayerNames(): string[];
    static GetNavMeshArea(go: any): number;
    static GetNavMeshAreaFromName(name: string): number;
    static SetNavMeshArea(go: any, areaIndex: number): void;
    static GetNavMeshAreaNames(): string[];
    static GetUniqueNameForSibling(parent: any, name: string): string;
    static SetParentAndAlign(child: any, parent: any): void;
    // properties
    // fields
  }
}
