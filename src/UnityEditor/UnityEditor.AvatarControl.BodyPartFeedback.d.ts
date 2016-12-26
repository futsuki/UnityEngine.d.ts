declare namespace UnityEditor.AvatarControl {
  class BodyPartFeedback {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(bodyPart: UnityEditor.BodyPart): UnityEditor.AvatarControl.BodyPartColor;
    BeginInvoke(bodyPart: UnityEditor.BodyPart, callback: any, object: any): any;
    EndInvoke(result: any): UnityEditor.AvatarControl.BodyPartColor;
    GetObjectData(info: any, context: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetInvocationList(): any[];
    DynamicInvoke(args: any[]): any;
    Clone(): any;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Method: any;
    readonly Target: any;
    // fields
  }
}
