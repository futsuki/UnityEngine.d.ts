declare namespace UnityEditor {
  class AvatarSetupTool {
    // constructors
    private constructor();
    // methods
    static GetModelBones(root: any, includeAll: boolean, humanBones: UnityEditor.AvatarSetupTool.BoneWrapper[]): any;
    static GetFirstHumanBoneAncestor(bones: UnityEditor.AvatarSetupTool.BoneWrapper[], boneIndex: number): number;
    static GetHumanBoneChild(bones: UnityEditor.AvatarSetupTool.BoneWrapper[], boneIndex: number): number;
    static GetHumanBones(serializedObject: UnityEditor.SerializedObject, actualBones: any): UnityEditor.AvatarSetupTool.BoneWrapper[];
    static ClearAll(serializedObject: UnityEditor.SerializedObject): void;
    static ClearHumanBoneArray(serializedObject: UnityEditor.SerializedObject): void;
    static ClearSkeletonBoneArray(serializedObject: UnityEditor.SerializedObject): void;
    static AutoSetupOnInstance(modelPrefab: any, modelImporterSerializedObject: UnityEditor.SerializedObject): void;
    static IsPoseValidOnInstance(modelPrefab: any, modelImporterSerializedObject: UnityEditor.SerializedObject): boolean;
    static AutoSetup(modelPrefab: any, modelInstance: any, modelImporterSerializedObject: UnityEditor.SerializedObject): void;
    static TestAndValidateAutoSetup(modelAsset: any): boolean;
    static DebugTransformTree(tr: any, bones: any, level: number): void;
    static FindSkeletonBone(serializedObject: UnityEditor.SerializedObject, t: any, createMissing: boolean, isRoot: boolean): UnityEditor.SerializedProperty;
    static FindSkeletonBone(skeletonBoneArray: UnityEditor.SerializedProperty, t: any, createMissing: boolean, isRoot: boolean): UnityEditor.SerializedProperty;
    static CopyPose(go: any, source: any): void;
    static GetBindPoseBonePositionRotation(skinMatrix: any, boneMatrix: any, bone: any, position: any, rotation: any): void;
    static SampleBindPose(go: any): void;
    static ShowBindPose(skin: any): void;
    static TransferPoseToDescription(serializedObject: UnityEditor.SerializedObject, root: any): void;
    static TransferDescriptionToPose(serializedObject: UnityEditor.SerializedObject, root: any): void;
    static IsPoseValid(bones: UnityEditor.AvatarSetupTool.BoneWrapper[]): boolean;
    static GetPoseError(bones: UnityEditor.AvatarSetupTool.BoneWrapper[]): number;
    static MakePoseValid(bones: UnityEditor.AvatarSetupTool.BoneWrapper[]): void;
    static GetBoneAlignmentError(bones: UnityEditor.AvatarSetupTool.BoneWrapper[], avatarOrientation: any, boneIndex: number): number;
    static MakeBoneAlignmentValid(bones: UnityEditor.AvatarSetupTool.BoneWrapper[], avatarOrientation: any, boneIndex: number): void;
    static AvatarComputeOrientation(bones: UnityEditor.AvatarSetupTool.BoneWrapper[]): any;
    static AvatarComputeOrientation(leftUpLeg: any, rightUpLeg: any, leftArm: any, rightArm: any): any;
    // properties
    // fields
  }
}
