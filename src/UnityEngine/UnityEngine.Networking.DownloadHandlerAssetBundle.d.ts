declare namespace UnityEngine.Networking {
  class DownloadHandlerAssetBundle extends UnityEngine.Networking.DownloadHandler {
    // constructors
    constructor(url: string, crc: number);
    constructor(url: string, version: number, crc: number);
    constructor(url: string, hash: UnityEngine.Hash128, crc: number);
    // methods
    static GetContent(www: UnityEngine.Networking.UnityWebRequest): UnityEngine.AssetBundle;
    // properties
    readonly assetBundle: UnityEngine.AssetBundle;
    // fields
  }
}
