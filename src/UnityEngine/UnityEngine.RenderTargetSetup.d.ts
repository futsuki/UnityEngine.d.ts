declare namespace UnityEngine {
  class RenderTargetSetup extends System.ValueType {
    // constructors
    protected constructor();
    // methods
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
