declare namespace UnityEditor {
  class LocalCacheServer {
    // constructors
    constructor();
    // methods
    static GetCacheLocation(): string;
    static GetRandomUnusedPort(): number;
    static PingHost(host: string, port: number, timeout: number): boolean;
    static WaitForServerToComeAlive(port: number): boolean;
    static Kill(): void;
    static CreateIfNeeded(): void;
    static Setup(): void;
    static GetLocalCacheServerPort(): number;
    static Clear(): void;
    static CheckValidCacheLocation(path: string): boolean;
    SetDirty(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    name: string;
    hideFlags: any;
    // fields
    path: string;
    port: number;
    size: number;
    pid: number;
    time: string;
    static SizeKey: string;
    static PathKey: string;
    static CustomPathKey: string;
  }
}
