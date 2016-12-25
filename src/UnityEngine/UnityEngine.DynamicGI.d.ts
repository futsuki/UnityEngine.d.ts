declare namespace UnityEngine {
  class DynamicGI {
    // constructors
    constructor();
    // methods
    static SetEmissive(renderer: UnityEngine.Renderer, color: UnityEngine.Color): any;
    static UpdateMaterials(renderer: UnityEngine.Renderer): any;
    static UpdateMaterials(terrain: UnityEngine.Terrain): any;
    static UpdateMaterials(terrain: UnityEngine.Terrain, x: number, y: number, width: number, height: number): any;
    static UpdateEnvironment(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static indirectScale: number;
    static updateThreshold: number;
    static synchronousMode: boolean;
    // fields
  }
}
