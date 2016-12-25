declare namespace UnityEngine {
  class MeshTopology {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Triangles: UnityEngine.MeshTopology;
    static Quads: UnityEngine.MeshTopology;
    static Lines: UnityEngine.MeshTopology;
    static LineStrip: UnityEngine.MeshTopology;
    static Points: UnityEngine.MeshTopology;
  }
}
