declare namespace UnityEditor {
  class AssetStoreUtils {
    // constructors
    constructor();
    // methods
    static Download(id: string, url: string, destination: string[], key: string, jsonData: string, resumeOK: boolean, doneCallback: UnityEditor.AssetStoreUtils.DownloadDoneCallback): any;
    static Download(id: string, url: string, destination: string[], key: string, jsonData: string, resumeOK: boolean): any;
    static CheckDownload(id: string, url: string, destination: string[], key: string): string;
    static RegisterDownloadDelegate(d: any): any;
    static UnRegisterDownloadDelegate(d: any): any;
    static GetLoaderPath(): string;
    static UpdatePreloading(): any;
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
