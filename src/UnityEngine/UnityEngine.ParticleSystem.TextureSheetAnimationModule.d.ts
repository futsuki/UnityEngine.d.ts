declare namespace UnityEngine.ParticleSystem {
  class TextureSheetAnimationModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
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
