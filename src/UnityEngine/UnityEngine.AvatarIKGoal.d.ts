declare namespace UnityEngine {
  class AvatarIKGoal {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static LeftFoot: UnityEngine.AvatarIKGoal;
    static RightFoot: UnityEngine.AvatarIKGoal;
    static LeftHand: UnityEngine.AvatarIKGoal;
    static RightHand: UnityEngine.AvatarIKGoal;
  }
}
