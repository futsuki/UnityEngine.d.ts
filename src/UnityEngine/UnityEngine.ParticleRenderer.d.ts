declare namespace UnityEngine {
  class ParticleRenderer extends UnityEngine.Renderer {
    // constructors
    constructor();
    // methods
    // properties
    particleRenderMode: UnityEngine.ParticleRenderMode;
    lengthScale: number;
    velocityScale: number;
    cameraVelocityScale: number;
    maxParticleSize: number;
    uvAnimationXTile: number;
    uvAnimationYTile: number;
    uvAnimationCycles: number;
    animatedTextureCount: number;
    maxPartileSize: number;
    uvTiles: UnityEngine.Rect[];
    widthCurve: UnityEngine.AnimationCurve;
    heightCurve: UnityEngine.AnimationCurve;
    rotationCurve: UnityEngine.AnimationCurve;
    // fields
  }
}
