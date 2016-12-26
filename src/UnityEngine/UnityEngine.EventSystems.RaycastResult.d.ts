declare namespace UnityEngine.EventSystems {
  class RaycastResult {
    // constructors
    private constructor();
    // methods
    Clear(): void;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    gameObject: UnityEngine.GameObject;
    readonly isValid: boolean;
    // fields
    module: UnityEngine.EventSystems.BaseRaycaster;
    distance: number;
    index: number;
    depth: number;
    sortingLayer: number;
    sortingOrder: number;
    worldPosition: UnityEngine.Vector3;
    worldNormal: UnityEngine.Vector3;
    screenPosition: UnityEngine.Vector2;
  }
}
