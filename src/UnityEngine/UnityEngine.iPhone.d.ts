declare namespace UnityEngine {
  class iPhone extends System.Object {
    // constructors
    constructor();
    // methods
    static SetNoBackupFlag(path: string): void;
    static ResetNoBackupFlag(path: string): void;
    // properties
    static readonly generation: UnityEngine.iPhoneGeneration;
    static readonly vendorIdentifier: string;
    static readonly advertisingIdentifier: string;
    static readonly advertisingTrackingEnabled: boolean;
    // fields
  }
}
