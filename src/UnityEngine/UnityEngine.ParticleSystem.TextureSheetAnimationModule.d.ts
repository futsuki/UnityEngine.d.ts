declare namespace UnityEngine.ParticleSystem {
  class TextureSheetAnimationModule {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    enabled: boolean;
    numTilesX: number;
    numTilesY: number;
    animation: UnityEngine.ParticleSystemAnimationType;
    useRandomRow: boolean;
    frameOverTime: UnityEngine.ParticleSystem.MinMaxCurve;
    frameOverTimeMultiplier: number;
    startFrame: UnityEngine.ParticleSystem.MinMaxCurve;
    startFrameMultiplier: number;
    cycleCount: number;
    rowIndex: number;
    uvChannelMask: UnityEngine.Rendering.UVChannelFlags;
    flipU: number;
    flipV: number;
    // fields
  }
}
