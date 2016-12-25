declare namespace UnityEngine.Rendering {
  class RenderQueue {
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
    static Background: UnityEngine.Rendering.RenderQueue;
    static Geometry: UnityEngine.Rendering.RenderQueue;
    static AlphaTest: UnityEngine.Rendering.RenderQueue;
    static Transparent: UnityEngine.Rendering.RenderQueue;
    static Overlay: UnityEngine.Rendering.RenderQueue;
  }
}
