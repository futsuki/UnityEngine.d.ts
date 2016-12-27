declare namespace UnityEditor {
  class AvatarControl extends System.Object {
    // constructors
    constructor();
    // methods
    static ShowBoneMapping(shownBodyView: number, bodyPartCallback: ((bodyPart: UnityEditor.BodyPart) => UnityEditor.AvatarControl.BodyPartColor), bones: UnityEditor.AvatarSetupTool.BoneWrapper[], serializedObject: UnityEditor.SerializedObject, editor: UnityEditor.AvatarMappingEditor): number;
    static DrawBodyParts(rect: any, shownBodyView: number, bodyPartCallback: ((bodyPart: UnityEditor.BodyPart) => UnityEditor.AvatarControl.BodyPartColor)): void;
    static GetViewsThatContainBone(bone: number): number[];
    // properties
    // fields
  }
}
