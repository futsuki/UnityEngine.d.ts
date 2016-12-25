declare namespace UnityEditor.SceneViewOverlay {
  class Ordering {
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
    static Camera: UnityEditor.SceneViewOverlay.Ordering;
    static Cloth: UnityEditor.SceneViewOverlay.Ordering;
    static OcclusionCulling: UnityEditor.SceneViewOverlay.Ordering;
    static Lightmapping: UnityEditor.SceneViewOverlay.Ordering;
    static NavMesh: UnityEditor.SceneViewOverlay.Ordering;
    static ParticleEffect: UnityEditor.SceneViewOverlay.Ordering;
  }
}
