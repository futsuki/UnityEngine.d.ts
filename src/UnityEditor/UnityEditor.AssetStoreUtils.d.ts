declare namespace UnityEditor {
  class AssetStoreUtils extends System.Object {
    // constructors
    constructor();
    // methods
    static Download(id: string, url: string, destination: string[], key: string, jsonData: string, resumeOK: boolean, doneCallback: ((package_id: string, message: string, bytes: number, total: number) => void)): void;
    static Download(id: string, url: string, destination: string[], key: string, jsonData: string, resumeOK: boolean): void;
    static CheckDownload(id: string, url: string, destination: string[], key: string): string;
    static RegisterDownloadDelegate(d: UnityEngine.ScriptableObject): void;
    static UnRegisterDownloadDelegate(d: UnityEngine.ScriptableObject): void;
    static GetLoaderPath(): string;
    static UpdatePreloading(): void;
    static GetOfflinePath(): string;
    static GetAssetStoreUrl(): string;
    static GetAssetStoreSearchUrl(): string;
    // properties
    // fields
  }
}
