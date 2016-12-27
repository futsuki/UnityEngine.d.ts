declare namespace UnityEngine.Networking {
  class DownloadHandlerTexture extends UnityEngine.Networking.DownloadHandler {
    // constructors
    constructor();
    constructor(readable: boolean);
    // methods
    static GetContent(www: UnityEngine.Networking.UnityWebRequest): UnityEngine.Texture2D;
    // properties
    readonly texture: UnityEngine.Texture2D;
    // fields
  }
}
