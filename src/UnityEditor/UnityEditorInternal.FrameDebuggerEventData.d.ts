declare namespace UnityEditorInternal {
  class FrameDebuggerEventData {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    frameEventIndex: number;
    vertexCount: number;
    indexCount: number;
    instanceCount: number;
    shaderName: string;
    shader: any;
    shaderInstanceID: number;
    shaderPassIndex: number;
    shaderKeywords: string;
    rendererInstanceID: number;
    mesh: any;
    meshInstanceID: number;
    meshSubset: number;
    rtName: string;
    rtWidth: number;
    rtHeight: number;
    rtFormat: number;
    rtDim: number;
    rtFace: number;
    rtCount: number;
    rtHasDepthTexture: number;
    blendState: UnityEditorInternal.FrameDebuggerBlendState;
    rasterState: UnityEditorInternal.FrameDebuggerRasterState;
    depthState: UnityEditorInternal.FrameDebuggerDepthState;
    shaderProperties: UnityEditorInternal.ShaderProperties;
  }
}
