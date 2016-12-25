declare namespace UnityEngine {
  class AnimatorStateInfo {
    // constructors
    private constructor();
    // methods
    IsName(name: string): boolean;
    IsTag(tag: string): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
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
