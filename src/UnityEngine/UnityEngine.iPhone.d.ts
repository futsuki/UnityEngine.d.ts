declare namespace UnityEngine {
  class iPhone {
    // constructors
    constructor();
    // methods
    static SetNoBackupFlag(path: string): void;
    static ResetNoBackupFlag(path: string): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly generation: UnityEngine.iPhoneGeneration;
    static readonly vendorIdentifier: string;
    static readonly advertisingIdentifier: string;
    static readonly advertisingTrackingEnabled: boolean;
    // fields
  }
}
