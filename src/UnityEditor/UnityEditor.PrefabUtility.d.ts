declare namespace UnityEditor {
  class PrefabUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static GetPrefabParent(source: UnityEngine.Object): UnityEngine.Object;
    static GetPrefabObject(targetObject: UnityEngine.Object): UnityEngine.Object;
    static GetPropertyModifications(targetPrefab: UnityEngine.Object): UnityEditor.PropertyModification[];
    static SetPropertyModifications(targetPrefab: UnityEngine.Object, modifications: UnityEditor.PropertyModification[]): void;
    static InstantiateAttachedAsset(targetObject: UnityEngine.Object): UnityEngine.Object;
    static RecordPrefabInstancePropertyModifications(targetObject: UnityEngine.Object): void;
    static MergeAllPrefabInstances(targetObject: UnityEngine.Object): void;
    static DisconnectPrefabInstance(targetObject: UnityEngine.Object): void;
    static InstantiatePrefab(target: UnityEngine.Object): UnityEngine.Object;
    static InstantiatePrefab(target: UnityEngine.Object, destinationScene: any): UnityEngine.Object;
    static CreateEmptyPrefab(path: string): UnityEngine.Object;
    static CreatePrefab(path: string, go: any, options: UnityEditor.ReplacePrefabOptions): any;
    static CreatePrefab(path: string, go: any): any;
    static ReplacePrefab(go: any, targetPrefab: UnityEngine.Object, options: UnityEditor.ReplacePrefabOptions): any;
    static ReplacePrefab(go: any, targetPrefab: UnityEngine.Object): any;
    static ConnectGameObjectToPrefab(go: any, sourcePrefab: any): any;
    static FindRootGameObjectWithSameParentPrefab(target: any): any;
    static FindValidUploadPrefabInstanceRoot(target: any): any;
    static ReconnectToLastPrefab(go: any): boolean;
    static ResetToPrefabState(obj: UnityEngine.Object): boolean;
    static IsComponentAddedToPrefabInstance(source: UnityEngine.Object): boolean;
    static RevertPrefabInstance(go: any): boolean;
    static GetPrefabType(target: UnityEngine.Object): UnityEditor.PrefabType;
    static FindPrefabRoot(source: any): any;
    // properties
    // fields
    static prefabInstanceUpdated: ((instance: any) => void);
  }
}
