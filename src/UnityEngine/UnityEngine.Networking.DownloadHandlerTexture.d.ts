declare namespace UnityEngine.Networking {
  class DownloadHandlerTexture {
    // constructors
    constructor();
    constructor(readable: boolean);
    // methods
    static GetContent(www: UnityEngine.Networking.UnityWebRequest): UnityEngine.Texture2D;
    Dispose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly texture: UnityEngine.Texture2D;
    readonly isDone: boolean;
    readonly data: number[];
    readonly text: string;
    // fields
  }
}
