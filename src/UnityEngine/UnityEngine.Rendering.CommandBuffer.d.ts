declare namespace UnityEngine.Rendering {
  class CommandBuffer {
    // constructors
    constructor();
    // methods
    Dispose(): any;
    Release(): any;
    Clear(): any;
    DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, submeshIndex: number, shaderPass: number): any;
    DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, submeshIndex: number): any;
    DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material): any;
    DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, submeshIndex: number, shaderPass: number, properties: UnityEngine.MaterialPropertyBlock): any;
    DrawRenderer(renderer: UnityEngine.Renderer, material: UnityEngine.Material, submeshIndex: number): any;
    DrawRenderer(renderer: UnityEngine.Renderer, material: UnityEngine.Material): any;
    DrawRenderer(renderer: UnityEngine.Renderer, material: UnityEngine.Material, submeshIndex: number, shaderPass: number): any;
    DrawProcedural(matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, vertexCount: number, instanceCount: number): any;
    DrawProcedural(matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, vertexCount: number): any;
    DrawProcedural(matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, vertexCount: number, instanceCount: number, properties: UnityEngine.MaterialPropertyBlock): any;
    DrawProceduralIndirect(matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.ComputeBuffer, argsOffset: number): any;
    DrawProceduralIndirect(matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.ComputeBuffer): any;
    DrawProceduralIndirect(matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.ComputeBuffer, argsOffset: number, properties: UnityEngine.MaterialPropertyBlock): any;
    DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, shaderPass: number, matrices: UnityEngine.Matrix4x4[], count: number): any;
    DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, shaderPass: number, matrices: UnityEngine.Matrix4x4[]): any;
    DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, shaderPass: number, matrices: UnityEngine.Matrix4x4[], count: number, properties: UnityEngine.MaterialPropertyBlock): any;
    SetRenderTarget(rt: UnityEngine.Rendering.RenderTargetIdentifier): any;
    SetRenderTarget(rt: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number): any;
    SetRenderTarget(rt: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number, cubemapFace: UnityEngine.CubemapFace): any;
    SetRenderTarget(rt: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number, cubemapFace: UnityEngine.CubemapFace, depthSlice: number): any;
    SetRenderTarget(color: UnityEngine.Rendering.RenderTargetIdentifier, depth: UnityEngine.Rendering.RenderTargetIdentifier): any;
    SetRenderTarget(color: UnityEngine.Rendering.RenderTargetIdentifier, depth: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number): any;
    SetRenderTarget(color: UnityEngine.Rendering.RenderTargetIdentifier, depth: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number, cubemapFace: UnityEngine.CubemapFace): any;
    SetRenderTarget(color: UnityEngine.Rendering.RenderTargetIdentifier, depth: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number, cubemapFace: UnityEngine.CubemapFace, depthSlice: number): any;
    SetRenderTarget(colors: UnityEngine.Rendering.RenderTargetIdentifier[], depth: UnityEngine.Rendering.RenderTargetIdentifier): any;
    Blit(source: UnityEngine.Texture, dest: UnityEngine.Rendering.RenderTargetIdentifier): any;
    Blit(source: UnityEngine.Texture, dest: UnityEngine.Rendering.RenderTargetIdentifier, mat: UnityEngine.Material): any;
    Blit(source: UnityEngine.Texture, dest: UnityEngine.Rendering.RenderTargetIdentifier, mat: UnityEngine.Material, pass: number): any;
    Blit(source: UnityEngine.Rendering.RenderTargetIdentifier, dest: UnityEngine.Rendering.RenderTargetIdentifier): any;
    Blit(source: UnityEngine.Rendering.RenderTargetIdentifier, dest: UnityEngine.Rendering.RenderTargetIdentifier, mat: UnityEngine.Material): any;
    Blit(source: UnityEngine.Rendering.RenderTargetIdentifier, dest: UnityEngine.Rendering.RenderTargetIdentifier, mat: UnityEngine.Material, pass: number): any;
    GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite, antiAliasing: number): any;
    GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite): any;
    GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.RenderTextureFormat): any;
    GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode): any;
    GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number): any;
    GetTemporaryRT(nameID: number, width: number, height: number): any;
    ReleaseTemporaryRT(nameID: number): any;
    ClearRenderTarget(clearDepth: boolean, clearColor: boolean, backgroundColor: UnityEngine.Color, depth: number): any;
    ClearRenderTarget(clearDepth: boolean, clearColor: boolean, backgroundColor: UnityEngine.Color): any;
    SetGlobalFloat(name: string, value: number): any;
    SetGlobalFloat(nameID: number, value: number): any;
    SetGlobalVector(name: string, value: UnityEngine.Vector4): any;
    SetGlobalVector(nameID: number, value: UnityEngine.Vector4): any;
    SetGlobalColor(name: string, value: UnityEngine.Color): any;
    SetGlobalColor(nameID: number, value: UnityEngine.Color): any;
    SetGlobalMatrix(name: string, value: UnityEngine.Matrix4x4): any;
    SetGlobalMatrix(nameID: number, value: UnityEngine.Matrix4x4): any;
    SetGlobalFloatArray(propertyName: string, values: any): any;
    SetGlobalFloatArray(nameID: number, values: any): any;
    SetGlobalFloatArray(propertyName: string, values: number[]): any;
    SetGlobalFloatArray(nameID: number, values: number[]): any;
    SetGlobalVectorArray(propertyName: string, values: any): any;
    SetGlobalVectorArray(nameID: number, values: any): any;
    SetGlobalVectorArray(propertyName: string, values: UnityEngine.Vector4[]): any;
    SetGlobalVectorArray(nameID: number, values: UnityEngine.Vector4[]): any;
    SetGlobalMatrixArray(propertyName: string, values: any): any;
    SetGlobalMatrixArray(nameID: number, values: any): any;
    SetGlobalMatrixArray(propertyName: string, values: UnityEngine.Matrix4x4[]): any;
    SetGlobalMatrixArray(nameID: number, values: UnityEngine.Matrix4x4[]): any;
    SetGlobalTexture(name: string, value: UnityEngine.Rendering.RenderTargetIdentifier): any;
    SetGlobalTexture(nameID: number, value: UnityEngine.Rendering.RenderTargetIdentifier): any;
    SetGlobalBuffer(name: string, value: UnityEngine.ComputeBuffer): any;
    SetGlobalBuffer(nameID: number, value: UnityEngine.ComputeBuffer): any;
    SetShadowSamplingMode(shadowmap: UnityEngine.Rendering.RenderTargetIdentifier, mode: UnityEngine.Rendering.ShadowSamplingMode): any;
    IssuePluginEvent(callback: any, eventID: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    name: string;
    readonly sizeInBytes: number;
    // fields
  }
}
