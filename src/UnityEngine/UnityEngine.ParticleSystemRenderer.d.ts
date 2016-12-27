declare namespace UnityEngine {
  class ParticleSystemRenderer extends UnityEngine.Renderer {
    // constructors
    constructor();
    // methods
    GetMeshes(meshes: UnityEngine.Mesh[]): number;
    SetMeshes(meshes: UnityEngine.Mesh[]): void;
    SetMeshes(meshes: UnityEngine.Mesh[], size: number): void;
    EnableVertexStreams(streams: UnityEngine.ParticleSystemVertexStreams): void;
    DisableVertexStreams(streams: UnityEngine.ParticleSystemVertexStreams): void;
    AreVertexStreamsEnabled(streams: UnityEngine.ParticleSystemVertexStreams): boolean;
    GetEnabledVertexStreams(streams: UnityEngine.ParticleSystemVertexStreams): UnityEngine.ParticleSystemVertexStreams;
    // properties
    renderMode: UnityEngine.ParticleSystemRenderMode;
    lengthScale: number;
    velocityScale: number;
    cameraVelocityScale: number;
    normalDirection: number;
    alignment: UnityEngine.ParticleSystemRenderSpace;
    pivot: UnityEngine.Vector3;
    sortMode: UnityEngine.ParticleSystemSortMode;
    sortingFudge: number;
    minParticleSize: number;
    maxParticleSize: number;
    mesh: UnityEngine.Mesh;
    readonly meshCount: number;
    trailMaterial: UnityEngine.Material;
    // fields
  }
}
