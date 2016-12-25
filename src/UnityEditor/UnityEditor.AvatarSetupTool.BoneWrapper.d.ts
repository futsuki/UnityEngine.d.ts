declare namespace UnityEditor.AvatarSetupTool {
  class BoneWrapper {
    // constructors
    constructor(humanBoneName: string, serializedObject: UnityEditor.SerializedObject, bones: any);
    // methods
    Reset(serializedObject: UnityEditor.SerializedObject, bones: any): any;
    Serialize(serializedObject: UnityEditor.SerializedObject): any;
    GetSerializedProperty(serializedObject: UnityEditor.SerializedObject, createIfMissing: boolean): UnityEditor.SerializedProperty;
    BoneDotGUI(rect: any, boneIndex: number, doClickSelect: boolean, doDragDrop: boolean, serializedObject: UnityEditor.SerializedObject, editor: UnityEditor.AvatarMappingEditor): any;
    HandleClickSelection(selectRect: any, boneIndex: number): any;
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
