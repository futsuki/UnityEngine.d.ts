declare namespace UnityEngine {
  class iPhone {
    // constructors
    constructor();
    // methods
    static SetNoBackupFlag(path: string): any;
    static ResetNoBackupFlag(path: string): any;
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
