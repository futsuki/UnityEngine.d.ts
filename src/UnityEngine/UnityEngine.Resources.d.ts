declare namespace UnityEngine {
  class Resources {
    // constructors
    constructor();
    // methods
    static FindObjectsOfTypeAll(type: any): UnityEngine.Object[];
    static Load(path: string): UnityEngine.Object;
    static Load(path: string, systemTypeInstance: any): UnityEngine.Object;
    static LoadAsync(path: string): UnityEngine.ResourceRequest;
    static LoadAsync(path: string, type: any): UnityEngine.ResourceRequest;
    static LoadAll(path: string, systemTypeInstance: any): UnityEngine.Object[];
    static LoadAll(path: string): UnityEngine.Object[];
    static GetBuiltinResource(type: any, path: string): UnityEngine.Object;
    static UnloadAsset(assetToUnload: UnityEngine.Object): void;
    static UnloadUnusedAssets(): UnityEngine.AsyncOperation;
    static LoadAssetAtPath(assetPath: string, type: any): UnityEngine.Object;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
