declare namespace UnityEditor {
  class AssetStoreUtils {
    // constructors
    constructor();
    // methods
    static Download(id: string, url: string, destination: string[], key: string, jsonData: string, resumeOK: boolean, doneCallback: UnityEditor.AssetStoreUtils.DownloadDoneCallback): void;
    static Download(id: string, url: string, destination: string[], key: string, jsonData: string, resumeOK: boolean): void;
    static CheckDownload(id: string, url: string, destination: string[], key: string): string;
    static RegisterDownloadDelegate(d: any): void;
    static UnRegisterDownloadDelegate(d: any): void;
    static GetLoaderPath(): string;
    static UpdatePreloading(): void;
    static GetOfflinePath(): string;
    static GetAssetStoreUrl(): string;
    static GetAssetStoreSearchUrl(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
