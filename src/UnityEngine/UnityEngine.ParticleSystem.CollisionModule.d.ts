declare namespace UnityEngine.ParticleSystem {
  class CollisionModule {
    // constructors
    private constructor();
    // methods
    SetPlane(index: number, transform: UnityEngine.Transform): void;
    GetPlane(index: number): UnityEngine.Transform;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    enabled: boolean;
    type: UnityEngine.ParticleSystemCollisionType;
    mode: UnityEngine.ParticleSystemCollisionMode;
    dampen: UnityEngine.ParticleSystem.MinMaxCurve;
    dampenMultiplier: number;
    bounce: UnityEngine.ParticleSystem.MinMaxCurve;
    bounceMultiplier: number;
    lifetimeLoss: UnityEngine.ParticleSystem.MinMaxCurve;
    lifetimeLossMultiplier: number;
    minKillSpeed: number;
    maxKillSpeed: number;
    collidesWith: UnityEngine.LayerMask;
    enableDynamicColliders: boolean;
    enableInteriorCollisions: boolean;
    maxCollisionShapes: number;
    quality: UnityEngine.ParticleSystemCollisionQuality;
    voxelSize: number;
    radiusScale: number;
    sendCollisionMessages: boolean;
    readonly maxPlaneCount: number;
    // fields
  }
}
