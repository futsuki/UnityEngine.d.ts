declare namespace UnityEditor {
  class BodyPart {
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
    static None: UnityEditor.BodyPart;
    static Avatar: UnityEditor.BodyPart;
    static Body: UnityEditor.BodyPart;
    static Head: UnityEditor.BodyPart;
    static LeftArm: UnityEditor.BodyPart;
    static LeftFingers: UnityEditor.BodyPart;
    static RightArm: UnityEditor.BodyPart;
    static RightFingers: UnityEditor.BodyPart;
    static LeftLeg: UnityEditor.BodyPart;
    static RightLeg: UnityEditor.BodyPart;
    static Last: UnityEditor.BodyPart;
  }
}
