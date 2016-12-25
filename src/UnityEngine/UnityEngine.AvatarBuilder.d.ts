declare namespace UnityEngine {
  class AvatarBuilder {
    // constructors
    constructor();
    // methods
    static BuildHumanAvatar(go: UnityEngine.GameObject, humanDescription: UnityEngine.HumanDescription): UnityEngine.Avatar;
    static BuildGenericAvatar(go: UnityEngine.GameObject, rootMotionTransformName: string): UnityEngine.Avatar;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
