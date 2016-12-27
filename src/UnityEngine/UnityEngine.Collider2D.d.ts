declare namespace UnityEngine {
  class Collider2D extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    IsTouching(collider: UnityEngine.Collider2D): boolean;
    IsTouchingLayers(layerMask: number): boolean;
    IsTouchingLayers(): boolean;
    OverlapPoint(point: UnityEngine.Vector2): boolean;
    Raycast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number, minDepth: number, maxDepth: number): number;
    Raycast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number, minDepth: number): number;
    Raycast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number): number;
    Raycast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number): number;
    Raycast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[]): number;
    Cast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, ignoreSiblingColliders: boolean): number;
    Cast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number): number;
    Cast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[]): number;
    // properties
    density: number;
    isTrigger: boolean;
    usedByEffector: boolean;
    offset: UnityEngine.Vector2;
    readonly attachedRigidbody: UnityEngine.Rigidbody2D;
    readonly shapeCount: number;
    readonly bounds: UnityEngine.Bounds;
    sharedMaterial: UnityEngine.PhysicsMaterial2D;
    readonly friction: number;
    readonly bounciness: number;
    // fields
  }
}
