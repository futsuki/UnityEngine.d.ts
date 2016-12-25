declare namespace UnityEngine.Networking {
  class DownloadHandlerAssetBundle {
    // constructors
    constructor(url: string, crc: number);
    constructor(url: string, version: number, crc: number);
    constructor(url: string, hash: UnityEngine.Hash128, crc: number);
    // methods
    static GetContent(www: UnityEngine.Networking.UnityWebRequest): UnityEngine.AssetBundle;
    Dispose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly assetBundle: UnityEngine.AssetBundle;
    readonly isDone: boolean;
    readonly data: number[];
    readonly text: string;
    // fields
  }
}
