declare namespace UnityEngine.Networking {
  class DownloadHandlerAudioClip {
    // constructors
    constructor(url: string, audioType: UnityEngine.AudioType);
    // methods
    static GetContent(www: UnityEngine.Networking.UnityWebRequest): UnityEngine.AudioClip;
    Dispose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly audioClip: UnityEngine.AudioClip;
    readonly isDone: boolean;
    readonly data: number[];
    readonly text: string;
    // fields
  }
}
