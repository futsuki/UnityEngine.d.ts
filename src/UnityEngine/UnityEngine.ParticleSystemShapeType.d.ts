declare namespace UnityEngine {
  class ParticleSystemShapeType {
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
    static Sphere: UnityEngine.ParticleSystemShapeType;
    static SphereShell: UnityEngine.ParticleSystemShapeType;
    static Hemisphere: UnityEngine.ParticleSystemShapeType;
    static HemisphereShell: UnityEngine.ParticleSystemShapeType;
    static Cone: UnityEngine.ParticleSystemShapeType;
    static Box: UnityEngine.ParticleSystemShapeType;
    static Mesh: UnityEngine.ParticleSystemShapeType;
    static ConeShell: UnityEngine.ParticleSystemShapeType;
    static ConeVolume: UnityEngine.ParticleSystemShapeType;
    static ConeVolumeShell: UnityEngine.ParticleSystemShapeType;
    static Circle: UnityEngine.ParticleSystemShapeType;
    static CircleEdge: UnityEngine.ParticleSystemShapeType;
    static SingleSidedEdge: UnityEngine.ParticleSystemShapeType;
    static MeshRenderer: UnityEngine.ParticleSystemShapeType;
    static SkinnedMeshRenderer: UnityEngine.ParticleSystemShapeType;
    static BoxShell: UnityEngine.ParticleSystemShapeType;
    static BoxEdge: UnityEngine.ParticleSystemShapeType;
  }
}
