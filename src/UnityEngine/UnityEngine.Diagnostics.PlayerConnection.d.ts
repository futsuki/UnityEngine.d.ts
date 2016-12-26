declare namespace UnityEngine.Diagnostics {
  class PlayerConnection {
    // constructors
    private constructor();
    // methods
    static SendFile(remoteFilePath: string, data: number[]): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly connected: boolean;
    // fields
  }
}
