declare namespace UnityEngine {
  class AvatarTarget {
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
    static Root: UnityEngine.AvatarTarget;
    static Body: UnityEngine.AvatarTarget;
    static LeftFoot: UnityEngine.AvatarTarget;
    static RightFoot: UnityEngine.AvatarTarget;
    static LeftHand: UnityEngine.AvatarTarget;
    static RightHand: UnityEngine.AvatarTarget;
  }
}
