declare namespace UnityEditor.AvatarSetupTool {
  class BoneWrapper {
    // constructors
    constructor(humanBoneName: string, serializedObject: UnityEditor.SerializedObject, bones: any);
    // methods
    Reset(serializedObject: UnityEditor.SerializedObject, bones: any): void;
    Serialize(serializedObject: UnityEditor.SerializedObject): void;
    GetSerializedProperty(serializedObject: UnityEditor.SerializedObject, createIfMissing: boolean): UnityEditor.SerializedProperty;
    BoneDotGUI(rect: any, boneIndex: number, doClickSelect: boolean, doDragDrop: boolean, serializedObject: UnityEditor.SerializedObject, editor: UnityEditor.AvatarMappingEditor): void;
    HandleClickSelection(selectRect: any, boneIndex: number): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly humanBoneName: string;
    readonly messageName: string;
    // fields
    error: string;
    bone: any;
    state: UnityEditor.BoneState;
    static kIconSize: number;
  }
}
