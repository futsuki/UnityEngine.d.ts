declare namespace UnityEngine.Mesh {
  class InternalShaderChannel {
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
    static Vertex: UnityEngine.Mesh.InternalShaderChannel;
    static Normal: UnityEngine.Mesh.InternalShaderChannel;
    static Color: UnityEngine.Mesh.InternalShaderChannel;
    static TexCoord0: UnityEngine.Mesh.InternalShaderChannel;
    static TexCoord1: UnityEngine.Mesh.InternalShaderChannel;
    static TexCoord2: UnityEngine.Mesh.InternalShaderChannel;
    static TexCoord3: UnityEngine.Mesh.InternalShaderChannel;
    static Tangent: UnityEngine.Mesh.InternalShaderChannel;
  }
}
