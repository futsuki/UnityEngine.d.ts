declare namespace UnityEditor {
  class VertexChannelCompressionFlags {
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
    static kPosition: UnityEditor.VertexChannelCompressionFlags;
    static kNormal: UnityEditor.VertexChannelCompressionFlags;
    static kColor: UnityEditor.VertexChannelCompressionFlags;
    static kUV0: UnityEditor.VertexChannelCompressionFlags;
    static kUV1: UnityEditor.VertexChannelCompressionFlags;
    static kUV2: UnityEditor.VertexChannelCompressionFlags;
    static kUV3: UnityEditor.VertexChannelCompressionFlags;
    static kTangent: UnityEditor.VertexChannelCompressionFlags;
  }
}
