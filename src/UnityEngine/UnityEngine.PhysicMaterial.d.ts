declare namespace UnityEngine {
  class PhysicMaterial {
    // constructors
    constructor();
    constructor(name: string);
    // methods
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    dynamicFriction: number;
    staticFriction: number;
    bounciness: number;
    bouncyness: number;
    frictionDirection2: UnityEngine.Vector3;
    dynamicFriction2: number;
    staticFriction2: number;
    frictionCombine: UnityEngine.PhysicMaterialCombine;
    bounceCombine: UnityEngine.PhysicMaterialCombine;
    frictionDirection: UnityEngine.Vector3;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
