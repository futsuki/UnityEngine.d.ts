declare namespace UnityEngine.Networking {
  class UploadHandlerRaw {
    // constructors
    constructor(data: number[]);
    // methods
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly data: number[];
    contentType: string;
    readonly progress: number;
    // fields
  }
}
