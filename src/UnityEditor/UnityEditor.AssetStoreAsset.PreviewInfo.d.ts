declare namespace UnityEditor.AssetStoreAsset {
  class PreviewInfo {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    packageName: string;
    packageShortUrl: string;
    packageSize: number;
    packageVersion: string;
    packageRating: number;
    packageAssetCount: number;
    isPurchased: boolean;
    isDownloadable: boolean;
    publisherName: string;
    encryptionKey: string;
    packageUrl: string;
    buildProgress: number;
    downloadProgress: number;
    categoryName: string;
  }
}
