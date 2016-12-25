declare namespace UnityEngine.Networking {
  class DownloadHandlerScript {
    // constructors
    constructor();
    constructor(preallocatedBuffer: number[]);
    // methods
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
