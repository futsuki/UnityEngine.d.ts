declare namespace UnityEngine {
  class AnimatorTransitionInfo {
    // constructors
    private constructor();
    // methods
    IsName(name: string): boolean;
    IsUserName(name: string): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly fullPathHash: number;
    readonly nameHash: number;
    readonly userNameHash: number;
    readonly normalizedTime: number;
    readonly anyState: boolean;
    // fields
  }
}
