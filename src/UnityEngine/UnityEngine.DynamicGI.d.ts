declare namespace UnityEngine {
  class DynamicGI extends System.Object {
    // constructors
    constructor();
    // methods
    static SetEmissive(renderer: UnityEngine.Renderer, color: UnityEngine.Color): void;
    static UpdateMaterials(renderer: UnityEngine.Renderer): void;
    static UpdateMaterials(terrain: UnityEngine.Terrain): void;
    static UpdateMaterials(terrain: UnityEngine.Terrain, x: number, y: number, width: number, height: number): void;
    static UpdateEnvironment(): void;
    // properties
    static indirectScale: number;
    static updateThreshold: number;
    static synchronousMode: boolean;
    // fields
  }
}
