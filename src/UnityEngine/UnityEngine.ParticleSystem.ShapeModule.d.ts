declare namespace UnityEngine.ParticleSystem {
  class ShapeModule {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    enabled: boolean;
    shapeType: UnityEngine.ParticleSystemShapeType;
    randomDirectionAmount: number;
    sphericalDirectionAmount: number;
    alignToDirection: boolean;
    radius: number;
    angle: number;
    length: number;
    box: UnityEngine.Vector3;
    meshShapeType: UnityEngine.ParticleSystemMeshShapeType;
    mesh: UnityEngine.Mesh;
    meshRenderer: UnityEngine.MeshRenderer;
    skinnedMeshRenderer: UnityEngine.SkinnedMeshRenderer;
    useMeshMaterialIndex: boolean;
    meshMaterialIndex: number;
    useMeshColors: boolean;
    normalOffset: number;
    meshScale: number;
    arc: number;
    randomDirection: boolean;
    // fields
  }
}
