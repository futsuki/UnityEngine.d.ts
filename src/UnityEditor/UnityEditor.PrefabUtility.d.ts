declare namespace UnityEditor {
  class PrefabUtility {
    // constructors
    constructor();
    // methods
    static GetPrefabParent(source: any): any;
    static GetPrefabObject(targetObject: any): any;
    static GetPropertyModifications(targetPrefab: any): UnityEditor.PropertyModification[];
    static SetPropertyModifications(targetPrefab: any, modifications: UnityEditor.PropertyModification[]): void;
    static InstantiateAttachedAsset(targetObject: any): any;
    static RecordPrefabInstancePropertyModifications(targetObject: any): void;
    static MergeAllPrefabInstances(targetObject: any): void;
    static DisconnectPrefabInstance(targetObject: any): void;
    static InstantiatePrefab(target: any): any;
    static InstantiatePrefab(target: any, destinationScene: any): any;
    static CreateEmptyPrefab(path: string): any;
    static CreatePrefab(path: string, go: any, options: UnityEditor.ReplacePrefabOptions): any;
    static CreatePrefab(path: string, go: any): any;
    static ReplacePrefab(go: any, targetPrefab: any, options: UnityEditor.ReplacePrefabOptions): any;
    static ReplacePrefab(go: any, targetPrefab: any): any;
    static ConnectGameObjectToPrefab(go: any, sourcePrefab: any): any;
    static FindRootGameObjectWithSameParentPrefab(target: any): any;
    static FindValidUploadPrefabInstanceRoot(target: any): any;
    static ReconnectToLastPrefab(go: any): boolean;
    static ResetToPrefabState(obj: any): boolean;
    static IsComponentAddedToPrefabInstance(source: any): boolean;
    static RevertPrefabInstance(go: any): boolean;
    static GetPrefabType(target: any): UnityEditor.PrefabType;
    static FindPrefabRoot(source: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static prefabInstanceUpdated: UnityEditor.PrefabUtility.PrefabInstanceUpdated;
  }
}
