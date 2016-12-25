declare namespace UnityEngine {
  class HideFlags {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static None: UnityEngine.HideFlags;
    static HideInHierarchy: UnityEngine.HideFlags;
    static HideInInspector: UnityEngine.HideFlags;
    static DontSaveInEditor: UnityEngine.HideFlags;
    static NotEditable: UnityEngine.HideFlags;
    static DontSaveInBuild: UnityEngine.HideFlags;
    static DontUnloadUnusedAsset: UnityEngine.HideFlags;
    static DontSave: UnityEngine.HideFlags;
    static HideAndDontSave: UnityEngine.HideFlags;
  }
}
