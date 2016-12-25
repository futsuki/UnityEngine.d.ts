declare namespace UnityEditor {
  class AvatarSetupTool {
    // constructors
    private constructor();
    // methods
    static GetModelBones(root: any, includeAll: boolean, humanBones: UnityEditor.AvatarSetupTool.BoneWrapper[]): any;
    static GetFirstHumanBoneAncestor(bones: UnityEditor.AvatarSetupTool.BoneWrapper[], boneIndex: number): number;
    static GetHumanBoneChild(bones: UnityEditor.AvatarSetupTool.BoneWrapper[], boneIndex: number): number;
    static GetHumanBones(serializedObject: UnityEditor.SerializedObject, actualBones: any): UnityEditor.AvatarSetupTool.BoneWrapper[];
    static ClearAll(serializedObject: UnityEditor.SerializedObject): any;
    static ClearHumanBoneArray(serializedObject: UnityEditor.SerializedObject): any;
    static ClearSkeletonBoneArray(serializedObject: UnityEditor.SerializedObject): any;
    static AutoSetupOnInstance(modelPrefab: any, modelImporterSerializedObject: UnityEditor.SerializedObject): any;
    static IsPoseValidOnInstance(modelPrefab: any, modelImporterSerializedObject: UnityEditor.SerializedObject): boolean;
    static AutoSetup(modelPrefab: any, modelInstance: any, modelImporterSerializedObject: UnityEditor.SerializedObject): any;
    static TestAndValidateAutoSetup(modelAsset: any): boolean;
    static DebugTransformTree(tr: any, bones: any, level: number): any;
    static FindSkeletonBone(serializedObject: UnityEditor.SerializedObject, t: any, createMissing: boolean, isRoot: boolean): UnityEditor.SerializedProperty;
    static FindSkeletonBone(skeletonBoneArray: UnityEditor.SerializedProperty, t: any, createMissing: boolean, isRoot: boolean): UnityEditor.SerializedProperty;
    static CopyPose(go: any, source: any): any;
    static GetBindPoseBonePositionRotation(skinMatrix: any, boneMatrix: any, bone: any, position: any, rotation: any): any;
    static SampleBindPose(go: any): any;
    static ShowBindPose(skin: any): any;
    static TransferPoseToDescription(serializedObject: UnityEditor.SerializedObject, root: any): any;
    static TransferDescriptionToPose(serializedObject: UnityEditor.SerializedObject, root: any): any;
    static IsPoseValid(bones: UnityEditor.AvatarSetupTool.BoneWrapper[]): boolean;
    static GetPoseError(bones: UnityEditor.AvatarSetupTool.BoneWrapper[]): number;
    static MakePoseValid(bones: UnityEditor.AvatarSetupTool.BoneWrapper[]): any;
    static GetBoneAlignmentError(bones: UnityEditor.AvatarSetupTool.BoneWrapper[], avatarOrientation: any, boneIndex: number): number;
    static MakeBoneAlignmentValid(bones: UnityEditor.AvatarSetupTool.BoneWrapper[], avatarOrientation: any, boneIndex: number): any;
    static AvatarComputeOrientation(bones: UnityEditor.AvatarSetupTool.BoneWrapper[]): any;
    static AvatarComputeOrientation(leftUpLeg: any, rightUpLeg: any, leftArm: any, rightArm: any): any;
    // properties
    // fields
  }
}
