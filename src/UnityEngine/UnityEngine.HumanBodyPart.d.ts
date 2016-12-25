declare namespace UnityEngine {
  class HumanBodyPart {
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
    static BodyStart: UnityEngine.HumanBodyPart;
    static LeftFingerStart: UnityEngine.HumanBodyPart;
    static RightFingerStart: UnityEngine.HumanBodyPart;
    static LastBone: UnityEngine.HumanBodyPart;
  }
}
