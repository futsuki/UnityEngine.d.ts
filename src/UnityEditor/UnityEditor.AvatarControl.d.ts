declare namespace UnityEditor {
  class AvatarControl {
    // constructors
    constructor();
    // methods
    static ShowBoneMapping(shownBodyView: number, bodyPartCallback: ((UnityEditor.BodyPart) => UnityEditor.AvatarControl.BodyPartColor), bones: UnityEditor.AvatarSetupTool.BoneWrapper[], serializedObject: UnityEditor.SerializedObject, editor: UnityEditor.AvatarMappingEditor): number;
    static DrawBodyParts(rect: any, shownBodyView: number, bodyPartCallback: ((UnityEditor.BodyPart) => UnityEditor.AvatarControl.BodyPartColor)): void;
    static GetViewsThatContainBone(bone: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
