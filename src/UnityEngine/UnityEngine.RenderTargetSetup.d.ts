declare namespace UnityEngine {
  class RenderTargetSetup {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    color: UnityEngine.RenderBuffer[];
    depth: UnityEngine.RenderBuffer;
    mipLevel: number;
    cubemapFace: UnityEngine.CubemapFace;
    depthSlice: number;
    colorLoad: UnityEngine.Rendering.RenderBufferLoadAction[];
    colorStore: UnityEngine.Rendering.RenderBufferStoreAction[];
    depthLoad: UnityEngine.Rendering.RenderBufferLoadAction;
    depthStore: UnityEngine.Rendering.RenderBufferStoreAction;
  }
}
