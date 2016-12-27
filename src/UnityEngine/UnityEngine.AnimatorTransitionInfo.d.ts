declare namespace UnityEngine {
  class AnimatorTransitionInfo extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    IsName(name: string): boolean;
    IsUserName(name: string): boolean;
    // properties
    readonly fullPathHash: number;
    readonly nameHash: number;
    readonly userNameHash: number;
    readonly normalizedTime: number;
    readonly anyState: boolean;
    // fields
  }
}
