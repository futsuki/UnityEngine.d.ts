declare namespace UnityEditor {
  class AvatarControl {
    // constructors
    constructor();
    // methods
    static ShowBoneMapping(shownBodyView: number, bodyPartCallback: UnityEditor.AvatarControl.BodyPartFeedback, bones: UnityEditor.AvatarSetupTool.BoneWrapper[], serializedObject: UnityEditor.SerializedObject, editor: UnityEditor.AvatarMappingEditor): number;
    static DrawBodyParts(rect: any, shownBodyView: number, bodyPartCallback: UnityEditor.AvatarControl.BodyPartFeedback): void;
    static GetViewsThatContainBone(bone: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
