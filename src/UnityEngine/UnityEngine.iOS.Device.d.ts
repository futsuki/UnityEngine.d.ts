declare namespace UnityEngine.iOS {
  class Device extends System.Object {
    // constructors
    constructor();
    // methods
    static SetNoBackupFlag(path: string): void;
    static ResetNoBackupFlag(path: string): void;
    // properties
    static readonly generation: UnityEngine.iOS.DeviceGeneration;
    static readonly systemVersion: string;
    static readonly vendorIdentifier: string;
    static readonly advertisingIdentifier: string;
    static readonly advertisingTrackingEnabled: boolean;
    // fields
  }
}
