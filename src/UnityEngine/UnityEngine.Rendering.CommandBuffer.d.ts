declare namespace UnityEngine.Rendering {
  class CommandBuffer {
    // constructors
    constructor();
    // methods
    Dispose(): void;
    Release(): void;
    Clear(): void;
    DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, submeshIndex: number, shaderPass: number): void;
    DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, submeshIndex: number): void;
    DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material): void;
    DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, submeshIndex: number, shaderPass: number, properties: UnityEngine.MaterialPropertyBlock): void;
    DrawRenderer(renderer: UnityEngine.Renderer, material: UnityEngine.Material, submeshIndex: number): void;
    DrawRenderer(renderer: UnityEngine.Renderer, material: UnityEngine.Material): void;
    DrawRenderer(renderer: UnityEngine.Renderer, material: UnityEngine.Material, submeshIndex: number, shaderPass: number): void;
    DrawProcedural(matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, vertexCount: number, instanceCount: number): void;
    DrawProcedural(matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, vertexCount: number): void;
    DrawProcedural(matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, vertexCount: number, instanceCount: number, properties: UnityEngine.MaterialPropertyBlock): void;
    DrawProceduralIndirect(matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.ComputeBuffer, argsOffset: number): void;
    DrawProceduralIndirect(matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.ComputeBuffer): void;
    DrawProceduralIndirect(matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.ComputeBuffer, argsOffset: number, properties: UnityEngine.MaterialPropertyBlock): void;
    DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, shaderPass: number, matrices: UnityEngine.Matrix4x4[], count: number): void;
    DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, shaderPass: number, matrices: UnityEngine.Matrix4x4[]): void;
    DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, shaderPass: number, matrices: UnityEngine.Matrix4x4[], count: number, properties: UnityEngine.MaterialPropertyBlock): void;
    SetRenderTarget(rt: UnityEngine.Rendering.RenderTargetIdentifier): void;
    SetRenderTarget(rt: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number): void;
    SetRenderTarget(rt: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number, cubemapFace: UnityEngine.CubemapFace): void;
    SetRenderTarget(rt: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number, cubemapFace: UnityEngine.CubemapFace, depthSlice: number): void;
    SetRenderTarget(color: UnityEngine.Rendering.RenderTargetIdentifier, depth: UnityEngine.Rendering.RenderTargetIdentifier): void;
    SetRenderTarget(color: UnityEngine.Rendering.RenderTargetIdentifier, depth: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number): void;
    SetRenderTarget(color: UnityEngine.Rendering.RenderTargetIdentifier, depth: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number, cubemapFace: UnityEngine.CubemapFace): void;
    SetRenderTarget(color: UnityEngine.Rendering.RenderTargetIdentifier, depth: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number, cubemapFace: UnityEngine.CubemapFace, depthSlice: number): void;
    SetRenderTarget(colors: UnityEngine.Rendering.RenderTargetIdentifier[], depth: UnityEngine.Rendering.RenderTargetIdentifier): void;
    Blit(source: UnityEngine.Texture, dest: UnityEngine.Rendering.RenderTargetIdentifier): void;
    Blit(source: UnityEngine.Texture, dest: UnityEngine.Rendering.RenderTargetIdentifier, mat: UnityEngine.Material): void;
    Blit(source: UnityEngine.Texture, dest: UnityEngine.Rendering.RenderTargetIdentifier, mat: UnityEngine.Material, pass: number): void;
    Blit(source: UnityEngine.Rendering.RenderTargetIdentifier, dest: UnityEngine.Rendering.RenderTargetIdentifier): void;
    Blit(source: UnityEngine.Rendering.RenderTargetIdentifier, dest: UnityEngine.Rendering.RenderTargetIdentifier, mat: UnityEngine.Material): void;
    Blit(source: UnityEngine.Rendering.RenderTargetIdentifier, dest: UnityEngine.Rendering.RenderTargetIdentifier, mat: UnityEngine.Material, pass: number): void;
    GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite, antiAliasing: number): void;
    GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite): void;
    GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.RenderTextureFormat): void;
    GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode): void;
    GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number): void;
    GetTemporaryRT(nameID: number, width: number, height: number): void;
    ReleaseTemporaryRT(nameID: number): void;
    ClearRenderTarget(clearDepth: boolean, clearColor: boolean, backgroundColor: UnityEngine.Color, depth: number): void;
    ClearRenderTarget(clearDepth: boolean, clearColor: boolean, backgroundColor: UnityEngine.Color): void;
    SetGlobalFloat(name: string, value: number): void;
    SetGlobalFloat(nameID: number, value: number): void;
    SetGlobalVector(name: string, value: UnityEngine.Vector4): void;
    SetGlobalVector(nameID: number, value: UnityEngine.Vector4): void;
    SetGlobalColor(name: string, value: UnityEngine.Color): void;
    SetGlobalColor(nameID: number, value: UnityEngine.Color): void;
    SetGlobalMatrix(name: string, value: UnityEngine.Matrix4x4): void;
    SetGlobalMatrix(nameID: number, value: UnityEngine.Matrix4x4): void;
    SetGlobalFloatArray(propertyName: string, values: any): void;
    SetGlobalFloatArray(nameID: number, values: any): void;
    SetGlobalFloatArray(propertyName: string, values: number[]): void;
    SetGlobalFloatArray(nameID: number, values: number[]): void;
    SetGlobalVectorArray(propertyName: string, values: any): void;
    SetGlobalVectorArray(nameID: number, values: any): void;
    SetGlobalVectorArray(propertyName: string, values: UnityEngine.Vector4[]): void;
    SetGlobalVectorArray(nameID: number, values: UnityEngine.Vector4[]): void;
    SetGlobalMatrixArray(propertyName: string, values: any): void;
    SetGlobalMatrixArray(nameID: number, values: any): void;
    SetGlobalMatrixArray(propertyName: string, values: UnityEngine.Matrix4x4[]): void;
    SetGlobalMatrixArray(nameID: number, values: UnityEngine.Matrix4x4[]): void;
    SetGlobalTexture(name: string, value: UnityEngine.Rendering.RenderTargetIdentifier): void;
    SetGlobalTexture(nameID: number, value: UnityEngine.Rendering.RenderTargetIdentifier): void;
    SetGlobalBuffer(name: string, value: UnityEngine.ComputeBuffer): void;
    SetGlobalBuffer(nameID: number, value: UnityEngine.ComputeBuffer): void;
    SetShadowSamplingMode(shadowmap: UnityEngine.Rendering.RenderTargetIdentifier, mode: UnityEngine.Rendering.ShadowSamplingMode): void;
    IssuePluginEvent(callback: any, eventID: number): void;
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
