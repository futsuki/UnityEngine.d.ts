declare namespace UnityEngine {
  class AssetBundle {
    // constructors
    constructor();
    // methods
    static LoadFromFileAsync(path: string, crc: number, offset: number): UnityEngine.AssetBundleCreateRequest;
    static LoadFromFileAsync(path: string, crc: number): UnityEngine.AssetBundleCreateRequest;
    static LoadFromFileAsync(path: string): UnityEngine.AssetBundleCreateRequest;
    static LoadFromFile(path: string, crc: number, offset: number): UnityEngine.AssetBundle;
    static LoadFromFile(path: string, crc: number): UnityEngine.AssetBundle;
    static LoadFromFile(path: string): UnityEngine.AssetBundle;
    static LoadFromMemoryAsync(binary: number[], crc: number): UnityEngine.AssetBundleCreateRequest;
    static LoadFromMemoryAsync(binary: number[]): UnityEngine.AssetBundleCreateRequest;
    static LoadFromMemory(binary: number[], crc: number): UnityEngine.AssetBundle;
    static LoadFromMemory(binary: number[]): UnityEngine.AssetBundle;
    Contains(name: string): boolean;
    Load(name: string): UnityEngine.Object;
    Load(name: string, type: any): UnityEngine.Object;
    LoadAsync(name: string, type: any): UnityEngine.AssetBundleRequest;
    LoadAll(type: any): UnityEngine.Object[];
    LoadAll(): UnityEngine.Object[];
    LoadAsset(name: string): UnityEngine.Object;
    LoadAsset(name: string, type: any): UnityEngine.Object;
    LoadAssetAsync(name: string): UnityEngine.AssetBundleRequest;
    LoadAssetAsync(name: string, type: any): UnityEngine.AssetBundleRequest;
    LoadAssetWithSubAssets(name: string): UnityEngine.Object[];
    LoadAssetWithSubAssets(name: string, type: any): UnityEngine.Object[];
    LoadAssetWithSubAssetsAsync(name: string): UnityEngine.AssetBundleRequest;
    LoadAssetWithSubAssetsAsync(name: string, type: any): UnityEngine.AssetBundleRequest;
    LoadAllAssets(): UnityEngine.Object[];
    LoadAllAssets(type: any): UnityEngine.Object[];
    LoadAllAssetsAsync(): UnityEngine.AssetBundleRequest;
    LoadAllAssetsAsync(type: any): UnityEngine.AssetBundleRequest;
    Unload(unloadAllLoadedObjects: boolean): void;
    AllAssetNames(): string[];
    GetAllAssetNames(): string[];
    GetAllScenePaths(): string[];
    static CreateFromFile(path: string): UnityEngine.AssetBundle;
    static CreateFromMemory(binary: number[]): UnityEngine.AssetBundleCreateRequest;
    static CreateFromMemoryImmediate(binary: number[]): UnityEngine.AssetBundle;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly mainAsset: UnityEngine.Object;
    readonly isStreamedSceneAssetBundle: boolean;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
