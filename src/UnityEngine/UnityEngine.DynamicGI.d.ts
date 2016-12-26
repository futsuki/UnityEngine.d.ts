declare namespace UnityEngine {
  class DynamicGI {
    // constructors
    constructor();
    // methods
    static SetEmissive(renderer: UnityEngine.Renderer, color: UnityEngine.Color): void;
    static UpdateMaterials(renderer: UnityEngine.Renderer): void;
    static UpdateMaterials(terrain: UnityEngine.Terrain): void;
    static UpdateMaterials(terrain: UnityEngine.Terrain, x: number, y: number, width: number, height: number): void;
    static UpdateEnvironment(): void;
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
