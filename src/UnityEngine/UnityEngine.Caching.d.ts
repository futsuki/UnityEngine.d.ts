declare namespace UnityEngine {
  class Caching extends System.Object {
    // constructors
    constructor();
    // methods
    static Authorize(name: string, domain: string, size: number, signature: string): boolean;
    static Authorize(name: string, domain: string, size: number, expiration: number, signature: string): boolean;
    static Authorize(name: string, domain: string, size: number, expiration: number, signature: string): boolean;
    static Authorize(name: string, domain: string, size: number, signature: string): boolean;
    static CleanCache(): boolean;
    static CleanNamedCache(name: string): boolean;
    static DeleteFromCache(url: string): boolean;
    static GetVersionFromCache(url: string): number;
    static IsVersionCached(url: string, version: number): boolean;
    static IsVersionCached(url: string, hash: UnityEngine.Hash128): boolean;
    static MarkAsUsed(url: string, version: number): boolean;
    static MarkAsUsed(url: string, hash: UnityEngine.Hash128): boolean;
    static SetNoBackupFlag(url: string, version: number): void;
    static SetNoBackupFlag(url: string, hash: UnityEngine.Hash128): void;
    static ResetNoBackupFlag(url: string, version: number): void;
    static ResetNoBackupFlag(url: string, hash: UnityEngine.Hash128): void;
    // properties
    static readonly index: UnityEngine.CacheIndex[];
    static readonly spaceFree: number;
    static maximumAvailableDiskSpace: number;
    static readonly spaceOccupied: number;
    static readonly spaceAvailable: number;
    static readonly spaceUsed: number;
    static expirationDelay: number;
    static enabled: boolean;
    static compressionEnabled: boolean;
    static readonly ready: boolean;
    // fields
  }
}
