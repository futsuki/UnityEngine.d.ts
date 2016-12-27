declare namespace UnityEngine {
  class AnimatorStateInfo extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    IsName(name: string): boolean;
    IsTag(tag: string): boolean;
    // properties
    readonly fullPathHash: number;
    readonly nameHash: number;
    readonly shortNameHash: number;
    readonly normalizedTime: number;
    readonly length: number;
    readonly speed: number;
    readonly speedMultiplier: number;
    readonly tagHash: number;
    readonly loop: boolean;
    // fields
  }
}
