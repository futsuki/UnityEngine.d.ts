declare namespace UnityEngine {
  class SkinnedMeshRenderer extends UnityEngine.Renderer {
    // constructors
    constructor();
    // methods
    BakeMesh(mesh: UnityEngine.Mesh): void;
    GetBlendShapeWeight(index: number): number;
    SetBlendShapeWeight(index: number, value: number): void;
    // properties
    bones: UnityEngine.Transform[];
    rootBone: UnityEngine.Transform;
    quality: UnityEngine.SkinQuality;
    sharedMesh: UnityEngine.Mesh;
    updateWhenOffscreen: boolean;
    skinnedMotionVectors: boolean;
    localBounds: UnityEngine.Bounds;
    // fields
  }
}
