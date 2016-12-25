declare namespace UnityEngine.Networking {
  class DownloadHandlerBuffer {
    // constructors
    constructor();
    // methods
    static GetContent(www: UnityEngine.Networking.UnityWebRequest): string;
    Dispose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly isDone: boolean;
    readonly data: number[];
    readonly text: string;
    // fields
  }
}
