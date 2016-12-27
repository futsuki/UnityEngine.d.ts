declare namespace UnityEngine.Networking {
  class DownloadHandlerAudioClip extends UnityEngine.Networking.DownloadHandler {
    // constructors
    constructor(url: string, audioType: UnityEngine.AudioType);
    // methods
    static GetContent(www: UnityEngine.Networking.UnityWebRequest): UnityEngine.AudioClip;
    // properties
    readonly audioClip: UnityEngine.AudioClip;
    // fields
  }
}
